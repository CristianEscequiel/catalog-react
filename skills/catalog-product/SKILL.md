---
name: catalog-product
description: Business rules for catalog products and interactions
---

## Purpose

This skill defines how products must behave in the catalog application.

It ensures consistency in product display, navigation and user interaction.

---

## Product Model

A product must follow this structure:

- id: string
- name: string
- description: string
- image: string

Optional:

- category: string
- featured: boolean

---

## Core Rules

1. Every product must be displayed using a reusable ProductCard component.
2. Product listing must be handled by a ProductList component.
3. Product detail must be accessible via route `/product/:id`.
4. Product data comes from a static JSON file in phase 1.
5. Do not hardcode products inside components.

---

## WhatsApp Integration (CRITICAL)

Every product must include a WhatsApp contact action.

Rules:

- Generate link dynamically
- Include product name in message

Example:

https://wa.me/{phone}?text=Me interesa {product.name}

- The button must be clearly visible in the UI
- The action must open in a new tab

---

## UI Behavior

- Product cards must show:
  - image
  - name
  - navigation link

- Product detail must show:
  - large image
  - name
  - description
  - WhatsApp button

---

## Navigation

- Use react-router
- Product detail must use route params (id)
- Do not duplicate routing logic

---

## Data Source

- Products must be stored in:
  /features/products/data/products.json

- Components must import data from this file
- Do not create alternative data sources

---

## Best Practices

- Keep product logic centralized
- Avoid duplicating product rendering logic
- Prefer reusable components
- Maintain consistent UI across product views

---

## Anti-Patterns

- Hardcoding product data inside components
- Creating multiple product card variations unnecessarily
- Duplicating WhatsApp logic in multiple places