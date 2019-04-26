---
title: Typography
summary: Guidelines for consistent typography accross apps and websites.
links:
  - Typefaces
  - Font Sizes
  - Font Weights
---

{{< typeset >}}

## Typefaces

The [Roboto](https://fonts.google.com/specimen/Roboto) typeface is used by the
design system. If Roboto cannot be used, the following fallback typefaces may be
used:

- `Helvetica`
- `Arial`
- `sans-serif`

## Font Sizes

The design system uses a
[major second](https://type-scale.com/?size=16&scale=1.125&font=Roboto) type
scale that has been rounded to the nearest whole pixel. The body font size is
set to `16px`.

To maintain consistency when using the design system, font sizes shouldn't be
set to a size not represented by this type scale. In order to make it easy to
use the font sizes in this scale, the design system provides the following CSS
classes:

{{< /typeset >}}

{{< table >}}

| CSS classes        | rem        | Use           | Sample                                             |
| ------------------ | ---------- | ------------- | -------------------------------------------------- |
| `.uw-font-size-xs` | `0.888rem` |               | <span class="uw-font-size-xs">Design System</span> |
| `.uw-font-size-sm` | `1rem`     | Default       | <span class="uw-font-size-sm">Design System</span> |
| `.uw-font-size-md` | `1.266rem` | `<h3>` `<h4>` | <span class="uw-font-size-md">Design System</span> |
| `.uw-font-size-lg` | `2.027rem` | `<h2>`        | <span class="uw-font-size-lg">Design System</span> |
| `.uw-font-size-xl` | `2.887rem` | `<h1>`        | <span class="uw-font-size-xl">Design System</span> |

{{< /table >}}

{{< typeset >}}

### Responsive Font Sizes

Each font size class also has responsive variants that only apply when the
screen is wider than the breakpoint. All of the font size classes above can
become responsive by adding a breakpoint suffix:

`.uw-font-size-{size}-{breakpoint}`

Where _size_ is one of the font sizes from the type scale.

Where _breakpoint_ is one of:

- `sm` for screens larger than `32em`
- `md` for screens larger than `48rem`
- `lg` for screens larger than `64rem`

## Font Weights

The design system uses `400` as the default font weight and the `700` weight for
bold text.

{{< /typeset >}}
