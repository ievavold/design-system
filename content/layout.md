---
title: Layout
summary:
  Sed mattis egestas metus, scelerisque viverra lectus dignissim ut. Cras auctor
  metus nunc, ac maximus sem dictum pellentesque. Finibus rutrum. Integer cursus
  mollis lectus nec maximus.
links:
  - Grid System
  - Margins and Padding
---

{{< typeset >}}

## Grid System

Donec faucibus quis lacus aliquam placerat. Cras est turpis, hendrerit ut est
in, tristique molestie magna. Maecenas non faucibus risus. Pellentesque habitant
morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci
varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus.

Donec leo magna, dapibus non tristique quis, sodales non est. Sapien nibh,
consectetur id consectetur sit amet, egestas a dolor. Proin sollicitudin vel
justo a commodo.

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

- `sm` for screens larger than `30rem`
- `md` for screens larger than `46.25rem`
- `lg` for screens larger than `67.5rem`

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

{{< /typeset >}}
