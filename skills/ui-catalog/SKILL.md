---
name: ui-catalog
description: Improve UI/UX for catalog applications using modern patterns
---

## Purpose

This skill ensures the catalog UI is modern, clean, and optimized for real users.

---

## Core Principles

- clean layout
- clear hierarchy
- mobile-first design
- strong call-to-action

---

## Layout Rules

- Use consistent spacing (p-4, gap-4)
- Use max-width containers (max-w-6xl mx-auto)
- Avoid full-width stretched content

---

## Product Card Rules

Each product card must:

- have rounded corners
- include image with fixed height
- show product name clearly
- include interaction (view or WhatsApp)

Example classes:

rounded-xl  
shadow-sm  
hover:shadow-md  
transition  

---

## Visual Hierarchy

- Title → large and bold
- Description → small and subtle
- Actions → clear and visible

---

## Buttons

Primary actions must:

- use primary color
- be clearly visible
- have hover effect

Example:

bg-primary text-white  
hover:opacity-90  

---

## WhatsApp Integration

- Must be highly visible
- Use green color
- Place in product detail and cards

---

## Responsive Design

- Mobile first
- Grid:
  - mobile → 1 column
  - tablet → 2 columns
  - desktop → 3-4 columns

---

## Theme Integration

- Always use CSS variables (no hardcoded colors)
- Respect light/dark mode

---

## Anti-Patterns

Avoid:

- inconsistent spacing
- too many colors
- large text blocks
- unclear actions