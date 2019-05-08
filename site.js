(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('clipboard')) :
  typeof define === 'function' && define.amd ? define(['clipboard'], factory) :
  (global = global || self, factory(global.ClipboardJS));
}(this, function (ClipboardJS) { 'use strict';

  const TRIGGER_ATTR = 'data-modal-trigger';
  const TRIGGER_SELECTOR = '[data-modal-trigger]';
  const CLOSE_ATTR = 'data-modal-close';
  const CLOSE_SELECTOR = '[data-modal-close]';
  const MODAL_SELECTOR = '.uw-modal';
  const MODAL_WINDOW_SELECTOR = '.uw-modal__window';

  const MODAL_FOCUSABLES = [
    'a[href]',
    'area[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    '[tabindex="-1"]'
  ].join(', ');

  const KEY_TAB = 9;
  const KEY_ESC = 27;

  function selectModal(id) {
    return {
      trigger: document.querySelector(`[${TRIGGER_ATTR}="${id}"]`),
      body: document.getElementById(id)
    };
  }

  function handleClick(event) {
    /**
     * If the click event was on an element marked with the `data-modal-trigger`
     * attribute, open the corresponding modal.
     */
    const triggerElem = event.target.closest(TRIGGER_SELECTOR);
    if (triggerElem) {
      const modalId = triggerElem.getAttribute(TRIGGER_ATTR);
      open(modalId);
      event.preventDefault();
      return;
    }

    /**
     * If the modal window element is closer to the event target than a modal
     * close element, ignore the click.
     */
    const windowVsCloseSelector = `${MODAL_WINDOW_SELECTOR}, ${CLOSE_SELECTOR}`;
    const closerElement = event.target.closest(windowVsCloseSelector);
    if (closerElement && closerElement.matches(MODAL_WINDOW_SELECTOR)) {
      event.stopPropagation();
      return false;
    }

    /**
     * If click event was on an element marked with the `data-modal-close`
     * attribute, close the corresponding modal.
     */
    const closeElem = event.target.closest(CLOSE_SELECTOR);
    if (closeElem) {
      const modalId = closeElem.getAttribute(CLOSE_ATTR);
      close(modalId);
      return;
    }
  }

  function handleKeydown(event) {
    const currentModal = event.target.closest(MODAL_SELECTOR);
    if (!currentModal) {
      return;
    }

    switch (event.keyCode) {
      case KEY_TAB: {
        const focusableNodeList = currentModal.querySelectorAll(MODAL_FOCUSABLES);
        const focusables = Array.from(focusableNodeList);
        const firstFocusable = focusables[0];
        const lastFocusable = focusables[focusables.length - 1];

        if (event.shiftKey) {
          handleBackwardTab(firstFocusable, lastFocusable, event);
        } else {
          handleForwardTab(firstFocusable, lastFocusable, event);
        }
        break;
      }
      case KEY_ESC: {
        close(currentModal.id);
        break;
      }
    }
  }

  function handleBackwardTab(firstFocusable, lastFocusable, event) {
    if (document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }

  function handleForwardTab(firstFocusable, lastFocusable, event) {
    if (document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  }

  function open(id = '') {
    const modal = selectModal(id);
    if (!modal.body) {
      throw new Error(`could not find modal with id of '${id}' to open`);
    }

    document.body.classList.add('uw-modal-open');
    modal.body.setAttribute('aria-hidden', 'false');
    modal.body.focus();
  }

  function close(id = '') {
    const modal = selectModal(id);
    if (!modal.body) {
      throw new Error(`could not find modal with id of '${id}' to open`);
    }

    document.body.classList.remove('uw-modal-open');
    modal.body.setAttribute('aria-hidden', 'true');
    modal.trigger.focus();
  }

  function init(context = document) {
    context.addEventListener('click', handleClick, false);
    context.addEventListener('keydown', handleKeydown, false);
  }

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

  class Toast {
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

  function init$1() {
    return {
      toast: options => showToast(new Toast(options))
    };
  }

  init();

  window.UW = {
    ...init$1()
  };

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

}));
