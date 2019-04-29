---
title: Typography
summary: Guidelines for consistent typography accross apps and websites.
links:
  - Font families
  - Font sizes
  - Line heights
  - Line lengths
---

{{< typeset >}}

## Font families

The design system provides the following font families. The `sans` font family
is used by default. The `mono` font family is used for snippets of code.

### Font family tokens

{{< /typeset >}}

{{< table >}}

| Token    | Family                                                   |
| -------- | -------------------------------------------------------- |
| `'sans'` | `'Public Sans', 'Arial', sans-serif`                     |
| `'mono'` | `'Roboto Mono', 'SFMono-Regular', 'Consolas', monospace` |

{{< /table >}}

{{< typeset >}}

### Using font family tokens

{{< /typeset >}}

{{< table >}}

| Context           | Usage                                                                 | Example                         |
| ----------------- | --------------------------------------------------------------------- | ------------------------------- |
| **SCSS function** | <code>font-family(<span class="token">family</span>)                  | `font-family('sans')`           |
| **SCSS mixin**    | <code>@include font-family(<span class="token">family</span>);</code> | `@include font-family('mono');` |
| **CSS class**     | <code>.uw-font-family-<span class="token">family</span></code>        | `.uw-font-family-mono`          |

{{< /table >}}

{{< typeset >}}

## Font sizes

The design system uses a major second type scale. The body font size is set to
`16px`.

To maintain consistency, font sizes shouldn’t be set to a size not represented
by this type scale. In order to make it easy to use the font sizes in this
scale, the design system provides SCSS utilities and CSS classes that implement
the font sizes in the type scale.

### Font size tokens

{{< /typeset >}}

{{< table >}}

| Token   | Size (`rem`) | Example                                             |
| ------- | ------------ | --------------------------------------------------- |
| `'xxs'` | `0.790rem`   | <span class="uw-font-size-xxs">Design System</span> |
| `'xs'`  | `0.889rem`   | <span class="uw-font-size-xs">Design System</span>  |
| `'sm'`  | `1rem`       | <span class="uw-font-size-sm">Design System</span>  |
| `'md'`  | `1.266rem`   | <span class="uw-font-size-md">Design System</span>  |
| `'lg'`  | `1.602rem`   | <span class="uw-font-size-lg">Design System</span>  |
| `'xl'`  | `2.027rem`   | <span class="uw-font-size-xl">Design System</span>  |
| `'xxl'` | `2.566rem`   | <span class="uw-font-size-xxl">Design System</span> |

{{< /table >}}

{{< typeset >}}

### Using font size tokens

{{< /typeset >}}

{{< table >}}

| Context           | Usage                                                             | Example                     |
| ----------------- | ----------------------------------------------------------------- | --------------------------- |
| **SCSS function** | <code>font-size(<span class="token">size</span>)                  | `font-size('sm')`           |
| **SCSS mixin**    | <code>@include font-size(<span class="token">size</span>);</code> | `@include font-size('md');` |
| **CSS class**     | <code>.uw-font-size-<span class="token">size</span></code>        | `.uw-font-size-lg`          |

{{< /table >}}

{{< typeset >}}

### Using responsive font sizes

Combining a font size with a breakpoint will only apply that font size when the
screen is as large or larger than the breakpoint.

{{< /typeset >}}

{{< table >}}

| Context        | Usage                                                                                                    | Example                           |
| -------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- |
| **SCSS mixin** | <code>@include font-size(<span class="token">size</span>, <span class="token">breakpoint</span>);</code> | `@include font-size('md', 'sm');` |
| **CSS class**  | <code>.uw-font-size-<span class="token">size</span>-<span class="token">breakpoint</span></code>         | `.uw-font-size-lg-md`             |

{{< /table >}}

{{< typeset >}}

## Line heights

Appropriate line heights make text more readable. Larger line heights should be
used with longer sections of text.

### Line height tokens

{{< /typeset >}}

{{< table >}}

| Token  | Value  | Usage                                                                             |
| ------ | ------ | --------------------------------------------------------------------------------- |
| `'xs'` | `1`    | Buttons, navigation, and other short bits of text not meant to break over a line. |
| `'sm'` | `1.15` | Headings, text less than 2 or 3 sentences                                         |
| `'md'` | `1.35` | Captions, text less than 1 paragraph                                              |
| `'lg'` | `1.62` | Long passages of text                                                             |
| `'xl'` | `1.75` | Pullquotes, short text meant to be distinguished                                  |

{{< /table >}}

{{< typeset >}}

### Using line height tokens

{{< /typeset >}}

{{< table >}}

|                   | Usage                                                                 | Example                       |
| ----------------- | --------------------------------------------------------------------- | ----------------------------- |
| **SCSS function** | <code>line-height(<span class="token">height</span>)                  | `line-height('sm')`           |
| **SCSS mixin**    | <code>@include line-height(<span class="token">height</span>);</code> | `@include line-height('md');` |
| **CSS class**     | <code>.uw-line-height-<span class="token">height</span></code>        | `.uw-line-height-lg`          |

{{< /table >}}

{{< typeset >}}

## Line lengths

The readability of text can benefit from limiting the maximum number of
characters per line. The design system provides a number of presets that can be
used to prevent text elements from becoming too wide.

The line lengths in the design system are set using the somewhat unusual
[CSS `ex` unit](https://stackoverflow.com/questions/918612/what-is-the-value-of-the-css-ex-unit).
The `ex` unit has a width equivalent to the x-height of the current font. This
is a better approximation for the width of a character than more common relative
units like `rem` and `em`.

### Line length tokens

{{< /typeset >}}

{{< table >}}

| Token    | Value                                                            |
| -------- | ---------------------------------------------------------------- |
| `'sm'`   | `48ex`                                                           |
| `'md'`   | `64ex`                                                           |
| `'lg'`   | `80ex`                                                           |
| `'none'` | no upper limit (useful for overriding previously applied limits) |

{{< /table >}}

{{< typeset >}}

### Using line length tokens

{{< /typeset >}}

{{< table >}}

| Context           | Usage                                                                 | Example                       |
| ----------------- | --------------------------------------------------------------------- | ----------------------------- |
| **SCSS function** | <code>line-length(<span class="token">length</span>)                  | `line-length('sm')`           |
| **SCSS mixin**    | <code>@include line-length(<span class="token">length</span>);</code> | `@include line-length('md');` |
| **CSS class**     | <code>.uw-line-length-<span class="token">length</span></code>        | `.uw-line-length-lg`          |

{{< /table >}}
