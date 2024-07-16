# Catalyst UI Kit

Catalyst is a modern application UI kit built with [Tailwind CSS](https://tailwindcss.com) and [React](https://react.dev/), designed and built by the Tailwind CSS team and included as part of [Tailwind UI](https://tailwindui.com).

## Getting started

To get started, first copy the component files included in the downloaded ZIP file into wherever you keep components in your own project. The components are provided in both TypeScript and plain JavaScript, pick whichever set you prefer.

Next, install the dependencies used by the components in Catalyst:

```sh
npm install @headlessui/react@next clsx
```

Catalyst is currently in development preview and depends on a development build of Headless UI, so be sure to install `@headlessui/react` using the `next` tag.

Catalyst is also designed for the latest version of Tailwind CSS, which is currently Tailwind CSS v3.4. To make sure that you are on the latest version of Tailwind, update it via npm:

```sh
npm install tailwindcss@latest
```

Now you're ready to start using the components in your project — just import them from wherever you're keeping your components and start using them like any of your other React components:

```jsx
import { Input } from './components/input'
import { Field, FieldGroup, Label } from './components/fieldset'
import { Button } from './components/button'

export default function SettingsForm() {
  return (
    <form>
      <FieldGroup>
        <Field>
          <Label>Name</Label>
          <Input name="name" />
        </Field>
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </Field>
        <Button type="submit">Save changes</Button>
      </FieldGroup>
    </form>
  )
}
```

Additional installation instructions can be found in the Catalyst documentation.

## Documentation

You can find the Catalyst documentation at https://catalyst.tailwindui.com/docs.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [React](https://react.dev) - the official React documentation
- [clsx](https://github.com/lukeed/clsx) - the GitHub repo for the `clsx` helper
