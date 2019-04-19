---
title: Forms
summary: Components that allow users to enter and submit information
links:
  - Buttons
---

{{< typeset >}}

## Buttons

Buttons can be used to draw attention to important actions.

### When to use a `<button>`

- Important actions like signing up
- Opening or closing modals and dialogs
- Submitting data to the server

### When to use a link

- Navigating between pages
- Less popular or less important actions

### Filled variations

{{< /typeset >}}

{{< example >}}

<button class="uw-button-filled">Default</button>
<button class="uw-button-filled uw-button--success">Success</button>
<button class="uw-button-filled uw-button--danger">Danger</button>
<button class="uw-button-filled" disabled>Disabled</button>

{{< /example >}}

{{< typeset >}}

### Outlined variations

{{< /typeset >}}

{{< example >}}

<button class="uw-button-outlined">Default</button>
<button class="uw-button-outlined uw-button--success">Success</button>
<button class="uw-button-outlined uw-button--danger">Danger</button>
<button class="uw-button-outlined" disabled>Disabled</button>

{{< /example >}}

{{< typeset >}}

### Button-styled links

In addition to the `<button>` elements used above, the `.uw-button` classes can
be used to style `<a>` tags.

{{< /typeset >}}

{{< example >}}

<a href="#" class="uw-button-filled">Default</a>
<a href="#" class="uw-button-filled uw-button--success">Success</a>
<a href="#" class="uw-button-filled uw-button--danger">Danger</a>

{{< /example >}}

{{< example >}}

<a href="#" class="uw-button-outlined">Default</a>
<a href="#" class="uw-button-outlined uw-button--success">Success</a>
<a href="#" class="uw-button-outlined uw-button--danger">Danger</a>

{{< /example >}}

{{< typeset >}}

## Checkboxes

{{< /typeset >}}

{{< example >}}

<form class="uw-form">
  <fieldset class="uw-fieldset">
    <legend class="uw-sr-only">Types of plants</legend>
    <div class="uw-checkbox">
      <input class="uw-checkbox__input" type="checkbox" id="tree" checked />
      <label class="uw-checkbox__label" for="tree">Tree</label>
    </div>
    <div class="uw-checkbox">
      <input class="uw-checkbox__input" type="checkbox" id="grass" />
      <label class="uw-checkbox__label" for="grass">Grass</label>
    </div>
    <div class="uw-checkbox">
      <input class="uw-checkbox__input" type="checkbox" id="moss" disabled />
      <label class="uw-checkbox__label" for="moss">Moss</label>
    </div>
    <div class="uw-checkbox">
      <input class="uw-checkbox__input" type="checkbox" id="flower" checked disabled />
      <label class="uw-checkbox__label" for="flower">Flower</label>
    </div>
  </fieldset>
</form>

{{< /example >}}

{{< typeset >}}

## Radio buttons

{{< /typeset >}}

{{< example >}}

<form class="uw-form">
  <fieldset class="uw-fieldset">
    <legend class="uw-sr-only">Types of livestock</legend>
    <div class="uw-radio">
      <input class="uw-radio__input" type="radio" name="livestock" value="cow" id="cow" checked />
      <label class="uw-radio__label" for="cow">Cow</label>
    </div>
    <div class="uw-radio">
      <input class="uw-radio__input" type="radio" name="livestock" value="sheep" id="sheep" />
      <label class="uw-radio__label" for="sheep">Sheep</label>
    </div>
    <div class="uw-radio">
      <input class="uw-radio__input" type="radio" name="livestock" value="chicken" id="chicken" disabled />
      <label class="uw-radio__label" for="chicken">Chicken</label>
    </div>
  </fieldset>
</form>

{{< /example >}}
