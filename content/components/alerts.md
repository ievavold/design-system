---
title: Alerts
summary:
  An alert keeps users informed of important and sometimes time-sensitive
  changes.
links:
  - Block Alerts
  - Alert Groups
  - Alert Descriptions
---

{{< typeset >}}

## Block Alerts

Block alerts take up the width of the parent element and prominently display
application status information to the user.

Block alerts should be used when the status information being shown is
representative of the entire app's status and **is not** closely linked to a
particular input or action.

### Info Alerts

{{< /typeset >}}

{{< example >}}

<div class="uw-alert uw-alert--info">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Alert title</p>
    <div class="uw-alert__description">
      <p>Optional description</p>
    </div>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

### Success Alerts

{{< /typeset >}}

{{< example >}}

<div class="uw-alert uw-alert--success">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Alert title</p>
    <div class="uw-alert__description">
      <p>Optional description</p>
    </div>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

### Warning Alerts

{{< /typeset >}}

{{< example >}}

<div class="uw-alert uw-alert--warning">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Alert title</p>
    <div class="uw-alert__description">
      <p>Optional description</p>
    </div>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

### Danger Alerts

{{< /typeset >}}

{{< example >}}

<div class="uw-alert uw-alert--danger">
  <div class="uw-alert__icon"></div>
  <div class="uw-alert__info">
    <p class="uw-alert__title">Alert title</p>
    <div class="uw-alert__description">
      <p>Optional description</p>
    </div>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

## Alert Groups

Alert groups are useful when a single action produces multiple alerts. The alert
group indicates that a list of alerts was produced by a single action.

{{< /typeset >}}

{{< example >}}

<ul class="uw-alert-group">
  <li class="uw-alert uw-alert--danger">
    <div class="uw-alert__icon"></div>
    <div class="uw-alert__info">
      <p class="uw-alert__title">Danger title</p>
      <div class="uw-alert__description">This prevented a successful submission.</div>
    </div>
  </li>
  <li class="uw-alert uw-alert--warning">
    <div class="uw-alert__icon"></div>
    <div class="uw-alert__info">
      <p class="uw-alert__title">Warning title</p>
    </div>
  </li>
  <li class="uw-alert uw-alert--warning">
    <div class="uw-alert__icon"></div>
    <div class="uw-alert__info">
      <p class="uw-alert__title">Another warning title</p>
    </div>
  </li>
</ul>

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

### Short Descriptions

If the alert description is a single snippet of text, it doesn't matter if the
text is wrapped by a paragraph tag. the formatting will be the same.

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
