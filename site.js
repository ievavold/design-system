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
