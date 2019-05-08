---
title: Toasts
summary:
  Status messages that appear for a short amount of time often along the bottom
  edge of the screen.
links:
  - Default toasts
  - Toast states
  - Toast actions
---

{{< typeset >}}

## Default toasts

Toasts are created by calling the `toast` method on the `UW` global object. The
method accepts the following options:

{{< /typeset >}}

{{< table >}}

| Option     | Required? | Type     | Description                                                         |
| ---------- | --------- | -------- | ------------------------------------------------------------------- |
| `message`  | Yes       | `string` | Text to display in toast. Should be less than 50 characters.        |
| `duration` | No        | `number` | Number of milliseconds before toast disappears. Defaults to `5000`. |
| `state`    | No        | `string` | Changes toast color. See the [toast state examples](#toast-states). |

{{< /table >}}

{{< example >}}

<button id="toast-1" class="uw-button--filled">Show toast</button>

<script>
  document
    .querySelector('#toast-1')
    .addEventListener('click', function () {
      UW.toast({
        message: `A short toast message`
      });
    }, false);
</script>

{{< /example >}}

{{< typeset >}}

## Toast states

Toasts support the following states:

{{< /typeset >}}

{{< table >}}

| State       | Example                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| `'info'`    | <button id="toast-state-info" class="uw-button--filled">Info toast</button>       |
| `'success'` | <button id="toast-state-success" class="uw-button--filled">Success toast</button> |
| `'warning'` | <button id="toast-state-warning" class="uw-button--filled">Warning toast</button> |
| `'danger'`  | <button id="toast-state-danger" class="uw-button--filled">Danger toast</button>   |

{{< /table >}}

{{< typeset >}}

<script>
  document
    .querySelector('#toast-state-info')
    .addEventListener('click', function () {
      UW.toast({
        state: 'info',
        message: 'This is an info toast'
      });
    }, false);

  document
    .querySelector('#toast-state-success')
    .addEventListener('click', function () {
      UW.toast({
        state: 'success',
        message: 'This is a success toast'
      });
    }, false);

  document
    .querySelector('#toast-state-warning')
    .addEventListener('click', function () {
      UW.toast({
        state: 'warning',
        message: 'This is a warning toast'
      });
    }, false);

  document
    .querySelector('#toast-state-danger')
    .addEventListener('click', function () {
      UW.toast({
        state: 'danger',
        message: 'This is a danger toast'
      });
    }, false);
</script>

{{< /typeset >}}
