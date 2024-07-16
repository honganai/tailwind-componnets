console.log(887)
const anchorElements = document.querySelectorAll('a');

// 遍历所有的<a>标签
anchorElements.forEach(anchorElement => {
  console.log(888)

  // 移除所有绑定的事件
  const clone = anchorElement.cloneNode(true);
  anchorElement.parentNode.replaceChild(clone, anchorElement);
  console.log(889)

  // 在新窗口打开链接
  clone.addEventListener('click', event => {
      console.log(890)

    event.preventDefault();
    window.open(clone.href, '_blank');
  });
});