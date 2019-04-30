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

### Simple columns

By default, columns will evenly allocate space between all sibling columns.

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

### Proportional columns

Columns can occupy a fixed proportion of the parent's width.

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

### Using simple columns and proportional columns

Grids support using simple columns (with the `.uw-col` class) and proportional
columns (with the `.uw-col-1` through `.uw-col-12` classes). The proportional
columns will occupy the same proportion of the parent's width and any leftover
space in the grid will be evenly allocated between any simple columns.

If the proportional columns take up more than 100% of the parent's width, the
grid will wrap columns across rows.

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

The design system provides a collection of design tokens for controlling the
spacing around elements. These tokens can be used to set element margins and
padding using either SCSS mixins or CSS classes.

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
