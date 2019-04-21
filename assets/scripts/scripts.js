(function(ClipboardJS) {
  const buttonTextDelay = 1500; // milliseconds
  const clipboard = new ClipboardJS('.docs-uses-clipboard');
  clipboard.on('success', event => {
    const elem = event.trigger;
    const wasText = elem.innerText;
    elem.innerText = 'Copied';
    setTimeout(() => {
      elem.innerText = wasText;
    }, buttonTextDelay);
  });
})(ClipboardJS);
