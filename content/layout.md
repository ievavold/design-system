---
title: Layout
summary: Utilities for structuring apps and webpages.
links:
  - Grids
  - Spacing
  - Breakpoints
---

{{< typeset >}}

## Grids

The design system provides a 12-column grid system built on the CSS Flexbox API.
Flexbox was chosen over the CSS Grid API because of greater browser support and
because it better represented the layout patterns used by the design system.

### Grid wrapper

All grid columns must have a grid wrapper as a direct parent. A grid wrapper is
an element with either the class `.uw-grid` or with the SCSS mixin
`@include grid();` applied.

The following is an example of a grid wrapper:

{{< /typeset >}}

{{< example no-live-example="true" >}}

<div class="uw-grid">
  <!-- grid columns will go here -->
</div>

{{< /example >}}

{{< typeset >}}

### Auto span columns

Auto span columns use the class `.uw-col` or the SCSS mixin `@include column();`
and automatically resize to take up the available space in a grid.

#### Using auto span columns

{{< /typeset >}}

{{< table >}}

| Context        | Usage                |
| -------------- | -------------------- |
| **SCSS mixin** | `@include column();` |
| **CSS class**  | `.uw-col`            |

{{< /table >}}

{{< typeset >}}

#### Auto span column example

{{< /typeset >}}

{{< example >}}

<div class="uw-grid">
  <div class="uw-col"><div class="inner"><code>.uw-col</code></div></div>
  <div class="uw-col"><div class="inner"><code>.uw-col</code></div></div>
  <div class="uw-col"><div class="inner"><code>.uw-col</code></div></div>
</div>

{{< /example >}}

{{< typeset >}}

### Fixed span columns

Fixed span columns take up a number of grid columns chosen by the developer. The
number of columns to span can be between `1` and `12`. More information about
how different span widths are computed is available in the
[column span token table](#column-span-tokens).

#### Using fixed span columns

{{< /typeset >}}

{{< table >}}

| Context        | Usage                                                                               | Example               |
| -------------- | ----------------------------------------------------------------------------------- | --------------------- |
| **SCSS mixin** | <code>@include column(<a class="token" href="#column-span-tokens">span</a>);</code> | `@include column(4);` |
| **CSS class**  | <code>.uw-col-<a class="token" href="#column-span-tokens">span</a></code>           | `.uw-col-9`           |

{{< /table >}}

{{< typeset >}}

#### Fixed span column example

{{< /typeset >}}

{{< example >}}

<div class="uw-grid">
  <div class="uw-col-4"><div class="inner"><code>.uw-col-4</code></div></div>
</div>

<div class="uw-grid">
  <div class="uw-col-8"><div class="inner"><code>.uw-col-8</code></div></div>
</div>

<div class="uw-grid">
  <div class="uw-col-12"><div class="inner"><code>.uw-col-12</code></div></div>
</div>

{{< /example >}}

{{< typeset >}}

### Responsive span columns

Often a column span that makes sense on desktops is too narrow on mobile or a
span that makes sense on mobile is too wide for desktops. Responsive span
columns help fix this problem by changing column span based on the width of the
screen.

Responsive span column classes and mixins require a span value and one of the
[breakpoint tokens](#). The span value will be applied to the column whenever
the screen is equal-to or larger-than the breakpoint. If multiple responsive
column classes or mixins apply at the same time, the span value associated with
the largest breakpoint is used.

#### Using responsive span columns

{{< /typeset >}}

{{< table >}}

| Context        | Usage                                                                                                                                          | Example                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **SCSS mixin** | <code>@include column(<a class="token" href="#column-span-tokens">span</a>, <a class="token" href="#breakpoint-tokens">breakpoint</a>);</code> | `@include column(6, 'md');` |
| **CSS class**  | <code>.uw-col-<a class="token" href="#column-span-tokens">span</a>-<a class="token" href="#breakpoint-tokens">breakpoint</a></code>            | `.uw-col-6-md`              |

{{< /table >}}

{{< typeset >}}

### Column span tokens

The following span tokens are supported by the design system grid. If an element
uses a span token not supported by the grid, that element will behave as an auto
span column.

{{< /typeset >}}

{{< table >}}

| Token | Percent   | Example                                                                                                            |
| ----- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| `1`   | `8.333%`  | <div class="uw-grid docs-span-example"><div class="uw-col-1"><div class="inner"><code>1</code></div></div></div>   |
| `2`   | `16.667%` | <div class="uw-grid docs-span-example"><div class="uw-col-2"><div class="inner"><code>2</code></div></div></div>   |
| `3`   | `25%`     | <div class="uw-grid docs-span-example"><div class="uw-col-3"><div class="inner"><code>3</code></div></div></div>   |
| `4`   | `33.333%` | <div class="uw-grid docs-span-example"><div class="uw-col-4"><div class="inner"><code>4</code></div></div></div>   |
| `5`   | `41.667%` | <div class="uw-grid docs-span-example"><div class="uw-col-5"><div class="inner"><code>5</code></div></div></div>   |
| `6`   | `50%`     | <div class="uw-grid docs-span-example"><div class="uw-col-6"><div class="inner"><code>6</code></div></div></div>   |
| `7`   | `58.333%` | <div class="uw-grid docs-span-example"><div class="uw-col-7"><div class="inner"><code>7</code></div></div></div>   |
| `8`   | `66.667%` | <div class="uw-grid docs-span-example"><div class="uw-col-8"><div class="inner"><code>8</code></div></div></div>   |
| `9`   | `75%`     | <div class="uw-grid docs-span-example"><div class="uw-col-9"><div class="inner"><code>9</code></div></div></div>   |
| `10`  | `83.333%` | <div class="uw-grid docs-span-example"><div class="uw-col-10"><div class="inner"><code>10</code></div></div></div> |
| `11`  | `91.667%` | <div class="uw-grid docs-span-example"><div class="uw-col-11"><div class="inner"><code>11</code></div></div></div> |
| `12`  | `100%`    | <div class="uw-grid docs-span-example"><div class="uw-col-12"><div class="inner"><code>12</code></div></div></div> |

{{< /table >}}

{{< typeset >}}

## Spacing

The design system provides a collection of design tokens for controlling the
spacing around elements. These tokens can be used to set margins and padding
with either SCSS mixins or CSS classes.

### Spacing tokens

{{< /typeset >}}

{{< table >}}

| Token    | Value    | Example                                                            |
| -------- | -------- | ------------------------------------------------------------------ |
| `'none'` | `0rem`   | <div class="docs-spacing uw-pad-all-none"><div>Content</div></div> |
| `'xs'`   | `0.5rem` | <div class="docs-spacing uw-pad-all-xs"><div>Content</div></div>   |
| `'sm'`   | `1rem`   | <div class="docs-spacing uw-pad-all-sm"><div>Content</div></div>   |
| `'md'`   | `1.5rem` | <div class="docs-spacing uw-pad-all-md"><div>Content</div></div>   |
| `'lg'`   | `2rem`   | <div class="docs-spacing uw-pad-all-lg"><div>Content</div></div>   |
| `'xl'`   | `2.5rem` | <div class="docs-spacing uw-pad-all-xl"><div>Content</div></div>   |

{{< /table >}}

{{< typeset >}}

### Using spacing tokens

{{< /typeset >}}

{{< table >}}

<table>
  <thead>
    <tr>
      <th>Context</th>
      <th>Usage</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>SCSS mixins</strong><br>Margin
      </td>
      <td>
        <code>@include margin-all(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include margin-top(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include margin-right(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include margin-bottom(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include margin-left(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include margin-x(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include margin-y(<a class="token" href="#spacing-tokens">spacing</a>)</code>
      </td>
      <td>
        <code>@include margin-all('none')</code><br>
        <code>@include margin-top('xs')</code><br>
        <code>@include margin-right('sm')</code><br>
        <code>@include margin-bottom('md')</code><br>
        <code>@include margin-left('lg')</code><br>
        <code>@include margin-x('xl')</code><br>
        <code>@include margin-y('none')</code>
      </td>
    </tr>
    <tr>
      <td>
        <strong>SCSS mixins</strong><br>Padding
      </td>
      <td>
        <code>@include padding-all(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include padding-top(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include padding-right(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include padding-bottom(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include padding-left(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include padding-x(<a class="token" href="#spacing-tokens">spacing</a>)</code><br>
        <code>@include padding-y(<a class="token" href="#spacing-tokens">spacing</a>)</code>
      </td>
      <td>
        <code>@include padding-all('none')</code><br>
        <code>@include padding-top('xs')</code><br>
        <code>@include padding-right('sm')</code><br>
        <code>@include padding-bottom('md')</code><br>
        <code>@include padding-left('lg')</code><br>
        <code>@include padding-x('xl')</code><br>
        <code>@include padding-y('none')</code>
      </td>
    </tr>
    <tr>
      <td>
        <strong>CSS classes</strong><br>Margin
      </td>
      <td>
        <code>.uw-mar-all-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-mar-top-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-mar-right-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-mar-bottom-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-mar-left-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-mar-x-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-mar-y-<a class="token" href="#spacing-tokens">spacing</a></code>
      </td>
      <td>
        <code>.uw-mar-all-none</code><br>
        <code>.uw-mar-top-xs</code><br>
        <code>.uw-mar-right-sm</code><br>
        <code>.uw-mar-bottom-md</code><br>
        <code>.uw-mar-left-lg</code><br>
        <code>.uw-mar-x-xl</code><br>
        <code>.uw-mar-y-none</code>
      </td>
    </tr>
    <tr>
      <td>
        <strong>CSS classes</strong><br>Padding
      </td>
      <td>
        <code>.uw-pad-all-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-pad-top-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-pad-right-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-pad-bottom-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-pad-left-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-pad-x-<a class="token" href="#spacing-tokens">spacing</a></code><br>
        <code>.uw-pad-y-<a class="token" href="#spacing-tokens">spacing</a></code>
      </td>
      <td>
        <code>.uw-pad-all-none</code><br>
        <code>.uw-pad-top-xs</code><br>
        <code>.uw-pad-right-sm</code><br>
        <code>.uw-pad-bottom-md</code><br>
        <code>.uw-pad-left-lg</code><br>
        <code>.uw-pad-x-xl</code><br>
        <code>.uw-pad-y-none</code>
      </td>
    </tr>
  </tbody>
</table>

{{< /table >}}

{{< typeset >}}

## Breakpoints

The design system defines the following breakpoints. The accompanying breakpoint
tokens are used throughout the design system to adapt apps and webpages to
different screen sizes.

### Breakpoint tokens

{{< /typeset >}}

{{< table >}}

| Token  | Size (`rem`) | Size (`px`) |
| ------ | ------------ | ----------- |
| `'sm'` | `32rem`      | `512px`     |
| `'md'` | `48rem`      | `768px`     |
| `'lg'` | `64rem`      | `1024px`    |

{{< /table >}}

{{< typeset >}}

### Using breakpoint tokens

The breakpoint tokens are used throughout the design system to create
[responsive span columns](#using-responsive-span-columns) and
[responsive font sizes](../typography#using-responsive-font-sizes).

Whenever other design system APIs use breakpoints to selectively apply styles,
those styles will always be applied on screens that are **equal to or larger
than** the breakpoint's size.

{{< /typeset >}}
