---
title: Layout
summary: Utilities for structuring app and website pages.
links:
  - Grid system
  - Spacing
---

{{< typeset >}}

## Grid system

The grid system is based around a 12 column layout. Layouts built with this
system are responsive by default and will adapt to mobile and desktop screens.

### Evenly spaced columns

An evenly spaced grid can be built by placing one or more `.uw-col` elements
inside of a container with the `.uw-grid` class. By default, space will be
allocated evenly between all `.uw-col` elements:

{{< /typeset >}}

{{< example >}}

<div class="uw-grid">
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
</div>

<div class="uw-grid">
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
</div>

<div class="uw-grid">
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

### Weighted columns

The grid layout layouts where some columns are wider or narrower than others.
Weighted columns are configured by appending a number between 1 and 12 to the
column item class:

{{< /typeset >}}

{{< example >}}

<div class="uw-grid">
  <div class="uw-col-3">
    <div class="inner"><code>.uw-col-3</code></div>
  </div>
</div>

<div class="uw-grid">
  <div class="uw-col-6">
    <div class="inner"><code>.uw-col-6</code></div>
  </div>
</div>

<div class="uw-grid">
  <div class="uw-col-12">
    <div class="inner"><code>.uw-col-12</code></div>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

### Mixing weighted and unweighted columns

If a grid layout uses both weighted and unweighted columns, the unweighted
columns will evenly occupy whatever amount of space is leftover after space has
been given to the weighted columns.

{{< /typeset >}}

{{< example >}}

<div class="uw-grid">
  <div class="uw-col-4">
    <div class="inner"><code>.uw-col-4</code></div>
  </div>
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
</div>

<div class="uw-grid">
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
  <div class="uw-col-6">
    <div class="inner"><code>.uw-col-6</code></div>
  </div>
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
</div>

<div class="uw-grid">
  <div class="uw-col">
    <div class="inner"><code>.uw-col</code></div>
  </div>
  <div class="uw-col-8">
    <div class="inner"><code>.uw-col-8</code></div>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

### Responsive columns

Responsive columns can change weight based on the width of the screen and are
specified with the form:

`.uw-col-{span}-{breakpoint}`

Where _span_ is a number from `1` to `12`. This sets the width of the column
when the screen is larger than the breakpoint.

Where _breakpoint_ is one of:

- `sm` for screens larger than `32em`
- `md` for screens larger than `48rem`
- `lg` for screens larger than `64rem`

{{< /typeset >}}

{{< example responsive >}}

<div class="uw-grid">
  <div class="uw-col-12 uw-col-6-md">
    <div class="inner">
      <span>
        <code>.uw-col-12</code>
        <code>.uw-col-6-md</code>
      </span>
    </div>
  </div>
  <div class="uw-col">
    <div class="inner">
      <code>.uw-col</code>
    </div>
  </div>
</div>

{{< /example >}}

{{< typeset >}}

## Spacing

_TODO_

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
      <td><strong>SCSS function</strong></td>
      <td><code>spacing(<span class="token">spacing</span>)</code></td>
      <td><code>spacing('sm')</code></td>
    </tr>
    <tr>
      <td>
        <strong>SCSS mixins</strong><br>Margin
      </td>
      <td>
        <code>@include margin-all(<span class="token">spacing</span>)</code><br>
        <code>@include margin-top(<span class="token">spacing</span>)</code><br>
        <code>@include margin-right(<span class="token">spacing</span>)</code><br>
        <code>@include margin-bottom(<span class="token">spacing</span>)</code><br>
        <code>@include margin-left(<span class="token">spacing</span>)</code><br>
        <code>@include margin-x(<span class="token">spacing</span>)</code><br>
        <code>@include margin-y(<span class="token">spacing</span>)</code>
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
        <code>@include padding-all(<span class="token">spacing</span>)</code><br>
        <code>@include padding-top(<span class="token">spacing</span>)</code><br>
        <code>@include padding-right(<span class="token">spacing</span>)</code><br>
        <code>@include padding-bottom(<span class="token">spacing</span>)</code><br>
        <code>@include padding-left(<span class="token">spacing</span>)</code><br>
        <code>@include padding-x(<span class="token">spacing</span>)</code><br>
        <code>@include padding-y(<span class="token">spacing</span>)</code>
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
        <code>.uw-mar-all-<span class="token">spacing</span></code><br>
        <code>.uw-mar-top-<span class="token">spacing</span></code><br>
        <code>.uw-mar-right-<span class="token">spacing</span></code><br>
        <code>.uw-mar-bottom-<span class="token">spacing</span></code><br>
        <code>.uw-mar-left-<span class="token">spacing</span></code><br>
        <code>.uw-mar-x-<span class="token">spacing</span></code><br>
        <code>.uw-mar-y-<span class="token">spacing</span></code>
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
        <code>.uw-pad-all-<span class="token">spacing</span></code><br>
        <code>.uw-pad-top-<span class="token">spacing</span></code><br>
        <code>.uw-pad-right-<span class="token">spacing</span></code><br>
        <code>.uw-pad-bottom-<span class="token">spacing</span></code><br>
        <code>.uw-pad-left-<span class="token">spacing</span></code><br>
        <code>.uw-pad-x-<span class="token">spacing</span></code><br>
        <code>.uw-pad-y-<span class="token">spacing</span></code>
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
