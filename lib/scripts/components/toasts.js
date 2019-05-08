const GLOBALS = {
  container: null
};

function mountContainer() {
  if (document.querySelector('#uw-toast-container')) {
    return (GLOBALS.container = document.querySelector('#uw-toast-container'));
  }

  const container = document.createElement('div');
  container.id = 'uw-toast-container';
  document.body.appendChild(container);
  GLOBALS.container = container;
  return container;
}

function unmountContainer() {
  if (GLOBALS.container) {
    GLOBALS.container.remove();
    GLOBALS.container = null;
  }
}

export class Toast {
  constructor(options = {}) {
    this.state = options.state || 'info';
    this.duration = options.duration || 5000;
    this.message = options.message || '';
    this.element = createToastElement(this.state, this.message);
  }
}

function createToastElement(state = 'info', message = '') {
  const toastRoot = document.createElement('div');
  toastRoot.classList.add('uw-toast');
  toastRoot.classList.add(`uw-toast--${state}`);

  const toastCard = document.createElement('div');
  toastCard.classList.add('uw-toast__card');
  toastRoot.appendChild(toastCard);

  const toastIcon = document.createElement('div');
  toastIcon.classList.add('uw-toast__icon');
  toastCard.appendChild(toastIcon);

  const toastBody = document.createElement('p');
  toastBody.classList.add('uw-toast__body');
  toastBody.innerText = `${message}`;
  toastCard.appendChild(toastBody);

  return toastRoot;
}

function showToast(toast) {
  if (GLOBALS.container === null) {
    mountContainer();
  }

  GLOBALS.container.appendChild(toast.element);

  setTimeout(() => {
    hideToastWithAnimation(toast);
  }, toast.duration);
}

function hideToastWithAnimation(toast) {
  toast.element.classList.add('uw-toast--removing');
  setTimeout(() => {
    hideToast(toast);
  }, 100);
}

function hideToast(toast) {
  toast.element.remove();

  if (GLOBALS.container && GLOBALS.container.childNodes.length === 0) {
    unmountContainer();
  }
}

export function init() {
  return {
    toast: options => showToast(new Toast(options))
  };
}
