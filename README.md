# Web Component Examples

In this repository you will find examples of web components built using:

1. Stencil.js
2. Lit
3. Hybrids
4. Atomico

The example component is a clipboard-copy component, which uses attributes and props/state to execute a clipboard copy command and display reactive functionality. The component idea is based on GitHub's clipboard-copy web component.

## What are Web Components?

Modern web browser API for writing custom HTML elements that can be reused across frontend frameworks and libraries.

Based on **four main specifications**:

1. **Custom Elements** - new W3C DOM spec for supporting new elements in HTML
2. **Shadow DOM** - allows hidden elements to be attached to nodes in a regular DOM tree
3. **ES Modules** - spec for supporting modern JS code reuse and syntax
4. **HTML Template**

You can add support for a custom element on an HTML just by importing a compiled JS module in a `<script>` tag in the document head.

## Libraries

- **Class Based**
  - Lit - *prev. LitElement*
    - TypeScript-first library written by Google using class components and TS decorators
    - Supports *reactive properties* that efficiently re-render component on value change
    - Uses declarative HTML with "tagged template literals" and string iterp.
    - Scoped styles with CSS tagged template literals
  - Stencil
    - Open-source library that supports JS + TS, generates pre-rendered WCs
    - Design system use case in mind when building project
    - Single-component lazy loading, async rendering pipeline
    - JSX support for component templates
- **Functional Component Based**
  - Hybrids
    - Open-source library for writing WCs with simple function syntax
    - No "global lifecycle" meaning component properties and lifecycle methods are independent
    - Supports composition syntax (like Vue3/React Hooks) for reusing code
    - Global state management support w/ model definition and external storage options
    - Template system uses template literals (like Lit)
  - Atomico
    - Open-source "micro-library" using functions, hooks and VDOM
    - Inspired by React Hooks, supports function composition for resuable code
    - Very simple syntax similar to writing modern React components
    - Uses Vite for compilation and HMR!