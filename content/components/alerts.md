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
    <div class="uw-alert__description">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

<div class="uw-alert uw-alert--success">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Success title</p>
    <div class="uw-alert__description">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

<div class="uw-alert uw-alert--warning">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Warning title</p>
    <div class="uw-alert__description">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </div>
</div>

<div class="uw-alert uw-alert--danger">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Danger title</p>
    <div class="uw-alert__description">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
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

{{< /typeset >}}

{{< example >}}

<div class="uw-alert uw-alert--danger">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Unable to load</p>
    <div class="uw-alert__description">
      <p>
        Mauris posuere, arcu a tincidunt tempor, ex justo semper
        augue, et ultricies urna eros at odio. Praesent cursus
        erat vitae dolor tempor, sit amet auctor arcu commodo.
      </p>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
      <button class="uw-button-filled">Try again</button>
    </div>
  </div>
</div>

{{< /example >}}
