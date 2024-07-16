'use client'

import { createContext, useContext, useMemo, useReducer, useRef } from 'react'

const ActionKind = {
  SET_META: 'SET_META',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  TOGGLE_MUTE: 'TOGGLE_MUTE',
  SET_CURRENT_TIME: 'SET_CURRENT_TIME',
  SET_DURATION: 'SET_DURATION',
}

const AudioPlayerContext = createContext(null)

function audioReducer(state, action) {
  switch (action.type) {
    case ActionKind.SET_META:
      return { ...state, episode: action.payload }
    case ActionKind.PLAY:
      return { ...state, playing: true }
    case ActionKind.PAUSE:
      return { ...state, playing: false }
    case ActionKind.TOGGLE_MUTE:
      return { ...state, muted: !state.muted }
    case ActionKind.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload }
    case ActionKind.SET_DURATION:
      return { ...state, duration: action.payload }
  }
}

export function AudioProvider({ children }) {
  let [state, dispatch] = useReducer(audioReducer, {
    playing: false,
    muted: false,
    duration: 0,
    currentTime: 0,
    episode: null,
  })
  let playerRef = useRef(null)

  let actions = useMemo(() => {
    return {
      play(episode) {
        if (episode) {
          dispatch({ type: ActionKind.SET_META, payload: episode })

          if (
            playerRef.current &&
            playerRef.current.currentSrc !== episode.audio.src
          ) {
            let playbackRate = playerRef.current.playbackRate
            playerRef.current.src = episode.audio.src
            playerRef.current.load()
            playerRef.current.pause()
            playerRef.current.playbackRate = playbackRate
            playerRef.current.currentTime = 0
          }
        }

        playerRef.current?.play()
      },
      pause() {
        playerRef.current?.pause()
      },
      toggle(episode) {
        this.isPlaying(episode) ? actions.pause() : actions.play(episode)
      },
      seekBy(amount) {
        if (playerRef.current) {
          playerRef.current.currentTime += amount
        }
      },
      seek(time) {
        if (playerRef.current) {
          playerRef.current.currentTime = time
        }
      },
      playbackRate(rate) {
        if (playerRef.current) {
          playerRef.current.playbackRate = rate
        }
      },
      toggleMute() {
        dispatch({ type: ActionKind.TOGGLE_MUTE })
      },
      isPlaying(episode) {
        return episode
          ? state.playing && playerRef.current?.currentSrc === episode.audio.src
          : state.playing
      },
    }
  }, [state.playing])

  let api = useMemo(() => ({ ...state, ...actions }), [state, actions])

  return (
    <>
      <AudioPlayerContext.Provider value={api}>
        {children}
      </AudioPlayerContext.Provider>
      <audio
        ref={playerRef}
        onPlay={() => dispatch({ type: ActionKind.PLAY })}
        onPause={() => dispatch({ type: ActionKind.PAUSE })}
        onTimeUpdate={(event) => {
          dispatch({
            type: ActionKind.SET_CURRENT_TIME,
            payload: Math.floor(event.currentTarget.currentTime),
          })
        }}
        onDurationChange={(event) => {
          dispatch({
            type: ActionKind.SET_DURATION,
            payload: Math.floor(event.currentTarget.duration),
          })
        }}
        muted={state.muted}
      />
    </>
  )
}

export function useAudioPlayer(episode) {
  let player = useContext(AudioPlayerContext)

  return useMemo(
    () => ({
      ...player,
      play() {
        player.play(episode)
      },
      toggle() {
        player.toggle(episode)
      },
      get playing() {
        return player.isPlaying(episode)
      },
    }),
    [player, episode],
  )
}
