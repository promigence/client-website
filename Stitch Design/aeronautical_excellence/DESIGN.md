---
name: Aeronautical Excellence
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffb59d'
  on-tertiary: '#5d1900'
  tertiary-container: '#350a00'
  on-tertiary-container: '#df551f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 16px
  container-max: 1440px
---

## Brand & Style

The design system is engineered to evoke the precision, reliability, and high-stakes nature of aerospace manufacturing. The brand personality is authoritative and technical, targeting aerospace engineers, defense contractors, and procurement officers who value structural integrity and performance data over decorative flair.

The design style is **Corporate Modern with Technical Industrial influences**. It utilizes a dark-mode-first approach to simulate high-end cockpit interfaces and clean-room diagnostics. The aesthetic is defined by high-contrast information density, subtle grid-based textures reminiscent of engineering blueprints, and a meticulous attention to alignment that suggests "zero-tolerance" manufacturing standards.

## Colors

The palette is anchored in **Midnight Navy (#0A192F)**, providing a deep, stable foundation that reduces eye strain during long-form technical analysis. **Titanium White (#F8F9FA)** is used for primary text and high-frequency UI elements to ensure maximum legibility against the dark base.

**Metallic Silver (#C0C0C0)** serves as a structural accent color, used for borders, dividers, and secondary iconography to simulate the look of machined aluminum and aerospace-grade alloys. **Safety Orange (#FF6B35)** is reserved strictly for critical path actions, alerts, and active statuses, mimicking high-visibility markings found in aviation environments.

## Typography

This design system utilizes a tiered typographic approach to separate high-level branding from technical data consumption. 

- **Display & Headlines:** Montserrat provides a geometric, sturdy feel that suggests structural engineering. Use All-Caps for `headline-sm` to denote section titles.
- **Body:** Inter is used for its exceptional readability in dense layouts and its neutral, systematic tone.
- **Technical Data:** JetBrains Mono (monospaced) is introduced for data tables, serial numbers, and telemetry to ensure numerical alignment and a "coded" industrial feel.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is housed in a 12-column grid with a maximum width of 1440px. The spacing system is strictly based on a **4px base unit**, emphasizing the "precision machining" theme where every pixel is intentional.

- **Desktop:** 12 columns, 24px gutters, 64px outside margins.
- **Tablet:** 8 columns, 16px gutters, 32px outside margins.
- **Mobile:** 4 columns, 16px gutters, 16px outside margins.

Backgrounds should feature a subtle 32px grid pattern in a low-contrast navy (#112240) to reinforce the technical blueprint aesthetic.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** rather than traditional shadows. Surfaces are stacked using varying shades of Navy to indicate depth:
- **Level 0 (Base):** #0A192F (Background)
- **Level 1 (Cards/Sections):** #112240 (Slightly lighter navy)
- **Level 2 (Modals/Popovers):** #1B2B44 (Lighter still)

Borders are the primary tool for definition. Use 1px solid borders in Metallic Silver (#C0C0C0) at 20% opacity for standard containers. For active or highlighted elements, use a subtle 4px outer glow in Safety Orange or Titanium White with 10% opacity to simulate illuminated cockpit displays.

## Shapes

The shape language is defined by **Precision Radii**. Corners are kept sharp to reflect the rigidity of aerospace components. 
- **Standard Radius:** 4px (Used for buttons, inputs, and small components).
- **Container Radius:** 8px (Used for cards and main UI panels).
- **Large Radius:** 12px (Used for major layout sections or modals).

Avoid fully rounded or "pill" shapes unless used for specific status indicators (tags), as sharp corners better communicate industrial engineering.

## Components

### Buttons
Primary buttons use a solid Safety Orange (#FF6B35) fill with black text for maximum contrast. Secondary buttons use a Titanium White outline with 1px thickness. All buttons should have a `text-transform: uppercase` and use the `label-caps` font style for a professional, commanding feel.

### Technical Data Tables
Tables are the core of the system. They use a 1px Silver border between rows. Header cells use a slightly darker navy background (#071221) and `label-caps` typography. Cell data should use `data-mono` for perfect vertical alignment of decimal points and part numbers.

### Inputs & Fields
Input fields are dark (#071221) with a 1px Silver border. On focus, the border transitions to Safety Orange with a 2px outer glow. Labels always sit above the field in `label-caps` style.

### Progress Indicators
Progress bars should be thin (4px height) and use a segmented design rather than a continuous fill, suggesting discrete stages of manufacturing or testing. Use Safety Orange for active progress and Silver for the track.

### Precision Chips/Tags
Used for status (e.g., "IN SPEC", "AWAITING QC"). These should be rectangular with 2px radius and use high-contrast background tints with matching text colors (e.g., Emerald for "Pass", Safety Orange for "Warning").