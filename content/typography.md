---
draft: true
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

| CSS classes                                | rem         | px     |                                              |
| ------------------------------------------ | ----------- | ------ | -------------------------------------------- |
| `.uw-font-size-14`<br>`.uw-font-size-xs`   | `0.875rem`  | `14px` | <span class="uw-font-size-14">Example</span> |
| `.uw-font-size-16`<br>`.uw-font-size-base` | `1rem`      | `16px` | <span class="uw-font-size-16">Example</span> |
| `.uw-font-size-18`                         | `1.125rem`  | `18px` | <span class="uw-font-size-18">Example</span> |
| `.uw-font-size-20`<br>`.uw-font-size-sm`   | `1.25rem`   | `20px` | <span class="uw-font-size-20">Example</span> |
| `.uw-font-size-23`                         | `1.4375rem` | `23px` | <span class="uw-font-size-23">Example</span> |
| `.uw-font-size-26`<br>`.uw-font-size-md`   | `1.625rem`  | `26px` | <span class="uw-font-size-26">Example</span> |
| `.uw-font-size-29`                         | `1.8125rem` | `29px` | <span class="uw-font-size-29">Example</span> |
| `.uw-font-size-32`<br>`.uw-font-size-lg`   | `2rem`      | `32px` | <span class="uw-font-size-32">Example</span> |
| `.uw-font-size-36`                         | `2.25rem`   | `36px` | <span class="uw-font-size-36">Example</span> |
| `.uw-font-size-41`<br>`.uw-font-size-xl`   | `2.5625rem` | `41px` | <span class="uw-font-size-41">Example</span> |
| `.uw-font-size-46`                         | `2.875rem`  | `46px` | <span class="uw-font-size-46">Example</span> |

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
