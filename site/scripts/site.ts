import * as ClipboardJS from 'clipboard';

const buttonTextDelay = 1500; // milliseconds
const cb = new ClipboardJS('.docs-uses-clipboard');
cb.on('success', event => {
  const elem = event.trigger;

  if (elem instanceof HTMLElement) {
    const wasText = elem.innerText;
    elem.innerText = 'Copied';
    setTimeout(() => {
      elem.innerText = wasText;
    }, buttonTextDelay);
  }
});
