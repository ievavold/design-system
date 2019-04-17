---
title: Layout
summary:
  A collection of tools and utilities for building pages for apps and websites.
links:
  - Grid System
  - Margins and Padding
---

{{< typeset >}}

## Grid System

The grid system is based around a 12 column layout. Layouts built with this
system are responsive by default and will adapt to mobile and desktop screens.

### Evenly Spaced Columns

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

### Weighted Columns

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

### Mixing Weighted and Unweighted Columns

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

### Responsive Columns

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

## Margins and Padding

Element margins and padding can be set with built-in utility classes. Spacing
utility classes are written in the form:

`.uw-{property}-{sides}-{size}`

Where _property_ is one of:

- `mar` for classes that set `margin`
- `pad` for classes that set `padding`

Where _sides_ is one of:

- `top`
- `right`
- `bottom`
- `left`
- `x` for classes that set both `top` and `bottom`
- `y` for classes that set both `left` and `right`
- `all` for classes that set all sides

Where _size_ is one of:

- `0` for classes that remove the margin or padding
- `1` for classes that set the margin or padding to `0.5rem`
- `2` for classes that set the margin or padding to `1rem`
- `3` for classes that set the margin or padding to `1.5rem`
- `4` for classes that set the margin or padding to `2rem`
- `5` for classes that set the margin or padding to `2.5rem`
- `6` for classes that set the margin or padding to `3rem`

### Responsive Margins and Padding

Element margins and padding can be tailored to specific screen sizes by adding a
breakpoint to a spacing utility class. Responsive spacing utility classes are
written in the form:

`.uw-{property}-{sides}-{size}-{breakpoint}`

Where _property_, _sides_, and _size_ are the same as above.

Where _breakpoint_ is one of:

- `sm` for screens larger than `32em`
- `md` for screens larger than `48rem`
- `lg` for screens larger than `64rem`

{{< /typeset >}}
