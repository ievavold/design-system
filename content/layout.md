---
title: Layout
summary:
  Sed mattis egestas metus, scelerisque viverra lectus dignissim ut. Cras auctor
  metus nunc, ac maximus sem dictum pellentesque. Finibus rutrum. Integer cursus
  mollis lectus nec maximus.
links:
  - Grid System
  - Spacing
  - Breakpoints
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

`.uw-col-{span}-{breakpoint}-{comparison}`

Where _span_ is a number from `1` to `12` setting the width of the column when
the class is applied.

Where _breakpoint_ is one of:

- `sm` for screens larger or smaller than `30rem`
- `md` for screens larger or smaller than `46.25rem`
- `lg` for screens larger or smaller than `67.5rem`

Where _comparison_ is one of:

- `up` if the class should only apply on screens **larger than or equal to** the
  breakpoint
- `down` if the class should only apply on screens **smaller** than the
  breakpoint

{{< /typeset >}}

{{< example >}}

<div class="uw-grid">
  <div class="uw-col-12 uw-col-6-md-up">
    <div class="inner">
      <span>
        <code>.uw-col-12</code>
        <code>.uw-col-6-md-up</code>
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
