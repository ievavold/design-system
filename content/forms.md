---
title: Forms
summary: Components that allow users to enter and submit information
links:
  - Buttons
  - Checkboxes
  - Radio Buttons
---

{{< typeset >}}

## Buttons

Buttons can be used to draw attention to important actions.

### When to Use a Button

- Important actions like signing up
- Opening or closing modals and dialogs
- Submitting data to the server

### When to Use a Link

- Navigating between pages
- Less popular or less important actions

### Filled Variations

{{< /typeset >}}

{{< example >}}

<button class="uw-button-filled">Default</button>
<button class="uw-button-filled uw-button--success">Success</button>
<button class="uw-button-filled uw-button--danger">Danger</button>
<button class="uw-button-filled" disabled>Disabled</button>

{{< /example >}}

{{< typeset >}}

### Outlined Variations

{{< /typeset >}}

{{< example >}}

<button class="uw-button-outlined">Default</button>
<button class="uw-button-outlined uw-button--success">Success</button>
<button class="uw-button-outlined uw-button--danger">Danger</button>
<button class="uw-button-outlined" disabled>Disabled</button>

{{< /example >}}

{{< typeset >}}

### Plain Buttons

{{< /typeset >}}

{{< example >}}

<button class="uw-button-plain">Default</button>
<button class="uw-button-plain uw-button--success">Success</button>
<button class="uw-button-plain uw-button--danger">Danger</button>
<button class="uw-button-plain" disabled>Disabled</button>

{{< /example >}}

{{< typeset >}}

### Button-Styled Links

In addition to the `<button>` elements used above, the `.uw-button` classes can
be used to style `<a>` tags.

Be aware when styling links to look like buttons that there are significant
behavioral differences between the two elements, even if they look similar:

- When focused, `<a>` tags are activated with the **Enter** key while `<button>`
  tags are activated with the **Space** key.
- When the `disabled` attribute is set on a `<button>`, the element cannot be
  focused and all mouse and keyboard inputs to the element are ignored by the
  browser. When the `disabled` attribute is added to an `<a>` tag, the element
  ignores the attribute and continues to respond to all mouse and keyboard
  inputs.

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

## Radio Buttons

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
