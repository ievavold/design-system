---
title: Layout
---

{{< typeset >}}

# Layout

Sed mattis egestas metus, scelerisque viverra lectus dignissim ut. Cras auctor
metus nunc, ac maximus sem dictum pellentesque. Finibus rutrum. Integer cursus
mollis lectus nec maximus. Etiam sed placerat velit. Curabitur eu leo
ullamcorper, blandit ipsum ut, volutpat mauris.

- Grid System
- Breakpoints
- Spacing

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

Responsive columns can change weight based on the width of the screen. These
columns can have the following forms where _span_ is a number from 1 to 12 and
_breakpoint_ is one of the breakpoint names.

The suffix `-up` indicates that the rule should only apply to screens _larger_
than the breakpoint. The suffix `-down` indicates that the rule should only
apply to screens _smaller_ than the breakpoint.

- `.uw-col-<span>-<breakpoint>-up`
- `.uw-col-<span>-<breakpoint>-down`

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