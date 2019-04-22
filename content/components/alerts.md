---
title: Alerts
summary:
  An alert keeps users informed of important and sometimes time-sensitive
  changes.
links:
  - Full-Width Alerts
  - Alert Descriptions
---

{{< typeset >}}

## Full-Width Alerts

{{< /typeset >}}

{{< example >}}

<div class="uw-alert uw-alert--info">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Info title</p>
    <p class="uw-alert__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

<div class="uw-alert uw-alert--success">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Success title</p>
    <p class="uw-alert__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

<div class="uw-alert uw-alert--warning">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Warning title</p>
    <p class="uw-alert__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

<div class="uw-alert uw-alert--danger">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Danger title</p>
    <p class="uw-alert__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

## Alert Descriptions

The examples above only used a single line in the alert description but the
description element is built to accomodate more complex descriptions.

### No Description

The alert description is not required and can be ommitted if the alert title is
sufficient.

The description **should not** be ommitted for `warning` and `danger` alerts.
The severity of these alerts requires more detailed communication to the user
about what has happened and if there is any response required from the user.

{{< /typeset >}}

{{< example >}}

<div class="uw-alert uw-alert--success">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">A success alert with no description</p>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

### Multiline Descriptions

The alert component also supports much longer descriptions with formatted text,
links, and even buttons.

If an alert has a description that is more complex than a single paragraph, the
`.uw-prose` class should be added to the description element for better
readability.

{{< /typeset >}}

{{< example >}}

<div class="uw-alert uw-alert--danger">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Unable to load</p>
    <div class="uw-alert__description uw-prose">
      <p>
        Nunc ullamcorper metus ac est interdum vulputate. Morbi velit risus,
        interdum non ante et, venenatis dictum dolor. Sed dapibus rutrum gravida.
      </p>
      <p>
        Mauris posuere, arcu a tincidunt tempor, ex justo semper augue, et
        ultricies urna eros at odio. Praesent cursus erat vitae dolor tempor,
        sit amet auctor arcu commodo.
      </p>
      <button class="uw-button-filled">Try again</button>
    </div>
  </div>
</div>

{{< /example >}}
