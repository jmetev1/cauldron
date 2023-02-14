# Resources
Important links to help make developing with Cauldron a little easier!

- Cauldron: https://cauldron.dequelabs.com
- Dark theme UXPin: https://preview.uxpin.com/4052c8b6f05ce03e28813f28deb3a682950c2ac6cvidm
- Light theme UXPin: https://preview.uxpin.com/68df515d0023cc4b79f25d43f7663e24e363b1b9cvidm
- PX to REM converter: https://nekocalc.com/px-to-rem-converter
- Flexbox and truncated text: https://css-tricks.com/flexbox-truncated-text/
- Complete guide to flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

# Breakpoints
Breakpoints are widths that determine how your responsive layout behaves across device or viewport sizes in Cauldron.

| Breakpoint  | Design Viewport |
| ------------- | ------------- |
| >= 992px  | 1440px design (large) |
| <= 991px  | 1024px design (medium) |
| <= 767px  | 720px design (small) |
| <= 512px  | 320px design (extra small) |

# Typography
Documentation and examples for Cauldron typography, including global settings, headings, body text, lists, and more.

## Global settings
* Font stack: `font-family: "Roboto", sans-serif;`
* Use the browser's default root `font-size` (typically 16px)
* It is best practice to set a `margin-bottom` to your typography only (do not set `margin-top`)

## Variables
```
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;
```

## Headings
All HTML headings, `<h1>` through `<h6>`, are available.

### Global heading styles
```
font-family: "Roboto", sans-serif;
font-weight: var(--font-weight-medium);
margin-bottom: var(--space-8);
line-height: 1.2rem;
```

### Headings
- Heading 1: `font-size: 2rem;` _// 32px_
- Heading 2: `font-size: 1.5rem;` _// 24px_
- Heading 3: `font-size: 1.25rem` _// 20px_
- Heading 4: `font-size: 1.125rem` _// 18px_
- Heading 5: `font-size: 0.938rem` _// 15px_
- Heading 6: `font-size: 0.813rem` _// 13px_

## Paragraph
```
font-weight: var(--font-weight-regular);
margin-bottom: var(--space-16);
line-height: 1.2rem;
```

# Spacing
Cauldron includes a wide range of variables to modify an element’s appearance.

## Variables and sizes
```
--space-2: 0.125rem; // 2px
--space-4: 0.25rem; // 4px
--space-6: 0.375rem; // 6px
--space-8: 0.5rem; // 8px
--space-12: 0.75rem; // 12px
--space-16: 1rem; // 16px
--space-24: 1.5rem; // 24px
--space-32: 2rem; // 32px
--space-40: 2.5rem; // 40px
--space-48: 3rem; // 48px
```

# Colors
Convey meaning through color with a handful of color variables for Dark and Light themes.

| Sample | Hexcode | Variable | Notes |
| :---: | --- | --- | --- |
| ![#3C7AAE](https://placehold.co/20x20/3C7AAE/3C7AAE.png) | `#3C7AAE` | `--accent-primary` | Light theme |
| ![#316091](https://placehold.co/20x20/316091/316091.png) | `#316091` | `--accent-primary-active` | Light theme |
| ![#3873A3](https://placehold.co/20x20/3873A3/3873A3.png) | `#3873A3` | `--link-text-color-hover` | Light theme |
| ![#F2F2F2](https://placehold.co/20x20/F2F2F2/F2F2F2.png) | `#F2F2F2` | `--accent-secondary` | Light theme |
| ![#E0E0E0](https://placehold.co/20x20/E0E0E0/E0E0E0.png) | `#E0E0E0` | `--accent-secondary-active` | Light theme |
| ![#000000](https://placehold.co/20x20/000000/000000.png) | `#000000` | `--black` | Both |
| ![#FFFFFF](https://placehold.co/20x20/FFFFFF/FFFFFF.png) | `#FFFFFF` | `--white` | Both |
| ![#F7F7F7](https://placehold.co/20x20/F7F7F7/F7F7F7.png) | `#F7F7F7` | `--light-workspace-color` | Light theme |
| ![#536370](https://placehold.co/20x20/536370/536370.png) | `#536370` | `--dark-workspace-color` | Dark theme |
| ![#5D676F](https://placehold.co/20x20/5D676F/5D676F.png) | `#5D676F` | `--stroke-dark` | Dark theme |
| ![#FDFDFE](https://placehold.co/20x20/FDFDFE/FDFDFE.png) | `#FDFDFE` | `--grey-10` | Both |
| ![#F2F2F2](https://placehold.co/20x20/F2F2F2/F2F2F2.png) | `#F2F2F2` | `--grey-20` | Both |
| ![#E0E0E0](https://placehold.co/20x20/E0E0E0/E0E0E0.png) | `#E0E0E0` | `--grey-30` | Both |
| ![#CCCCCC](https://placehold.co/20x20/CCCCCC/CCCCCC.png) | `#CCCCCC` | `--grey-40` | Both |
| ![#666666](https://placehold.co/20x20/666666/666666.png) | `#666666` | `--grey-60` | Both |
| ![#4D4D4D](https://placehold.co/20x20/4D4D4D/4D4D4D.png) | `#4D4D4D` | `--grey-80` | Both |
| ![#333333](https://placehold.co/20x20/333333/333333.png) | `#333333` | `--grey-90` | Both |
| ![#02101A](https://placehold.co/20x20/02101A/02101A.png) | `#02101A` | `--accent-dark` | Both |
| ![#283640](https://placehold.co/20x20/283640/283640.png) | `#283640` | `--accent-medium` | Both |
| ![#D4DDE0](https://placehold.co/20x20/D4DDE0/D4DDE0.png) | `#D4DDE0` | `--accent-light` | Both |
| ![#A5DB75](https://placehold.co/20x20/A5DB75/A5DB75.png) | `#A5DB75` | `--accent-success` | Both |
| ![#4FA630](https://placehold.co/20x20/4FA630/4FA630.png) | `#4FA630` | `--accent-success-high-contrast` | Light theme |
| ![#D1FFA4](https://placehold.co/20x20/D1FFA4/D1FFA4.png) | `#D1FFA4` | `--accent-success-light` | Both |
| ![#57A711](https://placehold.co/20x20/57A711/57A711.png) | `#57A711` | `--accent-success-dark` | Dark theme |
| ![#D93251](https://placehold.co/20x20/D93251/D93251.png) | `#D93251` | `--accent-error` | Both |
| ![#C92E40](https://placehold.co/20x20/C92E40/C92E40.png) | `#C92E40` | `--accent-error-active` | Both |
| ![#FE6D6B](https://placehold.co/20x20/FE6D6B/FE6D6B.png) | `#FE6D6B` | `--accent-danger` | Both |
| ![#F7846C](https://placehold.co/20x20/F7846C/F7846C.png) | `#F7846C` | `--accent-danger-light` | Dark theme |
| ![#FFDD75](https://placehold.co/20x20/FFDD75/FFDD75.png) | `#FFDD75` | `--accent-warning` | Both |
| ![#FFA1A1](https://placehold.co/20x20/FFA1A1/FFA1A1.png) | `#FFA1A1` | `--accent-warning-light` | Both |
| ![#FFE69F](https://placehold.co/20x20/FFE69F/FFE69F.png) | `#FFE69F` | `--accent-caution` | Both |
| ![#6CDAF2](https://placehold.co/20x20/6CDAF2/6CDAF2.png) | `#6CDAF2` | `--accent-info` | Both |
| ![#83E4FA](https://placehold.co/20x20/83E4FA/83E4FA.png) | `#83E4FA` | `--accent-info-light` | Both |
| ![#B51AD1](https://placehold.co/20x20/B51AD1/B51AD1.png) | `#B51AD1` | `--accent-purple-high-contrast` | Light theme |
| ![#C11BDE](https://placehold.co/20x20/C11BDE/C11BDE.png) | `#C11BDE` | `--focus-light` | Light theme |
| ![#EB94FF](https://placehold.co/20x20/EB94FF/EB94FF.png) | `#EB94FF` | `--focus-dark` | Dark theme |
| ![#FE6D6B](https://placehold.co/20x20/FE6D6B/FE6D6B.png) | `#FE6D6B` | `--issue-critical` | Both |
| ![#FFDD75](https://placehold.co/20x20/FFDD75/FFDD75.png) | `#FFDD75` | `--issue-serious` | Both |
| ![#F0C4F8](https://placehold.co/20x20/F0C4F8/F0C4F8.png) | `#F0C4F8` | `--issue-moderate` | Both |
| ![#F0F2F5](https://placehold.co/20x20/F0F2F5/F0F2F5.png) | `#F0F2F5` | `--issue-minor` | Currently using `#F2F2F2`. Needs to be updated. |
| ![#666666](https://placehold.co/20x20/666666/666666.png) | `#666666` | `--text-color-base` | Light theme |
| ![#FFFFFF](https://placehold.co/20x20/FFFFFF/FFFFFF.png) | `#FFFFFF` | `--text-color-light` | Dark theme |
| ![#CCCCCC](https://placehold.co/20x20/CCCCCC/CCCCCC.png) | `#CCCCCC` | `--text-color-light-disabled` | Currently using `rgba (0,0,0,.5)`, solid color |
