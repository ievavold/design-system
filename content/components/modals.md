---
title: Modals
summary:
  A modal is a smaller window displayed on top of the application with a
  darkened background.
links:
  - Overview
---

{{< typeset >}}

## Overview

Showing and hiding modals is complex and depends on the idioms of the
application's framework. For that reason this documentation won't prescribe
_how_ a modal should be triggered and instead describes how modals should be
represented on a page. It will be up to developers to implement these guidelines
within the application's framework.

{{< /typeset >}}

{{< example >}}

<button data-modal-trigger="example-modal" class="uw-button--filled">
  Show modal
</button>

<div
  id="example-modal"
  class="uw-modal"
  role="dialog"
  aria-hidden="true"
  aria-labelledby="example-modal__title"
  tabindex="-1">
  <div class="uw-modal__window uw-modal__window--size-md">
    <button data-modal-close="example-modal" class="uw-modal__close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </button>
    <header class="uw-modal__header">
      <h1 id="example-modal__title">Modal title</h1>
    </header>
    <div class="uw-modal__body uw-typeset">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
        luctus viverra. Aenean <a href="#">blandit et magna nec</a> molestie. Ut
        ut blandit odio. Pellentesque dui quam, facilisis ut nisi sed, suscipit
        congue.
      </p>
    </div>
    <footer class="uw-modal__footer">
      <button data-modal-close="example-modal" class="uw-button--filled">Okay</button>
    </footer>
  </div>
</div>

{{< /example >}}
