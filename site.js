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
     * If the click even occured _inside_ a modal, prevent it from bubbling up the
     * DOM tree. This is only relevant when the `init` context parameter is an
     * element other than `document`.
     */
    if (event.target.closest('.uw-modal__window')) {
      event.stopPropagation();
    }

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
     * If click event was on an element marked with the `data-modal-close`
     * attribute, close the corresponding modal.
     */
    const closeElem = event.target.closest(CLOSE_SELECTOR);
    if (closeElem) {
      const modalId = closeElem.getAttribute(CLOSE_ATTR);
      close(modalId);
      return;
    }

    /**
     * If the mouse clicked on the modal shadow, close the modal.
     */
    const modalElem = event.target.closest(MODAL_SELECTOR);
    if (event.target === modalElem) {
      close(modalElem.id);
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

  init();

  var buttonTextDelay = 1500; // milliseconds
  var cb = new ClipboardJS('.docs-uses-clipboard');
  cb.on('success', function (event) {
      var elem = event.trigger;
      if (elem instanceof HTMLElement) {
          var wasText_1 = elem.innerText;
          elem.innerText = 'Copied';
          setTimeout(function () {
              elem.innerText = wasText_1;
          }, buttonTextDelay);
      }
  });

}));
