# Freelo Design System: Themes

This document specifies the official color tokens and rules for the Freelo dual-theme system (Light and Dark).

## 1. Freela Light (Default)
The default theme is designed to be modern, light, and professional, suitable for daytime use.

### Color Palette (Tokens)
- **Primary:** `#FF6B00` (Orange)
- **Secondary:** `#1A2E4A` (Deep Blue)
- **Background:** `#FFFFFF` (White)
- **Background Secondary (Muted):** `#F8FAFC`
- **Borders:** `#E5E7EB`
- **Text Primary:** `#1A2E4A` (Deep Blue)
- **Text Secondary:** `#64748B` (Slate)
- **Success:** `#22C55E`
- **Warning:** `#F59E0B`
- **Danger:** `#EF4444`
- **Info:** `#3B82F6`

### Visual Application
- **Navbar:** Deep Blue background with white text/logo.
- **Cards:** White background with subtle borders and shadows.
- **Buttons:** Primary Orange or Outline with Deep Blue borders.

---

## 2. Freela Dark
A premium dark mode designed for exclusivity and modern SaaS aesthetics. It uses deep blacks and surfaces rather than generic grays.

### Color Palette (Tokens)
- **Primary:** `#FF6B00` (Orange)
- **Background:** `#0A0A0A` (Premium Black)
- **Surface (Card):** `#111111`
- **Surface Secondary (Popover/Muted):** `#1A1A1A`
- **Borders:** `#262626`
- **Text Primary:** `#FFFFFF` (White)
- **Text Secondary:** `#A1A1AA` (Zinc)
- **Success:** `#22C55E`
- **Warning:** `#F59E0B`
- **Danger:** `#EF4444`
- **Info:** `#3B82F6`

### Visual Application
- **Navbar:** Premium Black background.
- **Sidebar:** Premium Black background.
- **Cards:** Surface (`#111111`) background.
- **Modals:** Surface Secondary (`#1A1A1A`) background.

---

## 3. Implementation Rules

### Global Provider
The theme is managed by `next-themes` and wrapped in `AppProviders.tsx`. 
- **Attribute:** `class`
- **Default Theme:** `light`
- **Storage:** Persisted in `localStorage`.

### Usage in Components
Always use Tailwind CSS utility classes that respond to the theme:
- Colors: `bg-background`, `text-foreground`, `border-border`, `bg-card`.
- Dark mode variants: `dark:bg-secondary`, `dark:text-white`.

### Accessibility
- **Contrast:** Ensure a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text in both themes.
- **Focus States:** Use the `--ring` variable (`#FF6B00`) for clear focus indicators.

---

## 4. Design References
- **Light Mode:** Inspired by Stripe, Airbnb, and Linear.
- **Dark Mode:** Inspired by Vercel, Raycast, and GitHub Dark.
