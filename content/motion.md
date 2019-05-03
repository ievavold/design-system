---
title: Motion
summary: Guidelines for useful animations and transitions
links:
  - Easing functions
---

{{< typeset >}}

## Easing functions

Easing functions describe the rate of change in an animation or transition over
time. Linear easing appears unnatural to the human eye because it is so rare in
the real world. For this reason, timing functions in the design system
approximate real-world physics by gradually accelerating at the beginning of the
animation and gradually decelerating at the end.

### Easing function tokens

The design system provides 3 easing functions for use in animations and
transitions:

{{< /typeset >}}

{{< table >}}

| Token        | Value                             |
| ------------ | --------------------------------- |
| `'entrance'` | `cubic-bezier(0, 0, 0.38, 0.9)`   |
| `'standard'` | `cubic-bezier(0.2, 0, 0.38, 0.9)` |
| `'exit'`     | `cubic-bezier(0.2, 0, 1, 0.9)`    |

{{< /table >}}

{{< typeset >}}

### Using easing functions

The following mixin will set the appropriate easing function on an element. It
will also set the animation duration for consistenty with the rest of the design
system.

{{< /typeset >}}

{{< table >}}

| Context        | Usage                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------- |
| **SCSS mixin** | <code>@include motion(<a class="token" href="#easing-function-tokens">function</a>);</code> |
| **CSS class**  | <code>.uw-motion-<a class="token" href="#easing-function-tokens">function</a></code>        |

{{< /table >}}

{{< typeset >}}

{{< /typeset >}}
