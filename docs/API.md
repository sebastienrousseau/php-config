# `@sebastienrousseau/php-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/php-config`.

---

## Description
Shareable PHP configuration standards providing PER-CS 2.0 / PSR-12 formatting and Level 8 PHPStan analysis.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/php-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. .php-cs-fixer.php
- **Description**: Standardized PHP-CS-Fixer preset enforcing PER-CS 2.0, declare_strict_types, and ordered imports.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. phpstan.neon
- **Description**: Level 8 PHPStan static analysis configuration auditing types, dead code, and exception handling.
- **Scope**: Production & Development
- **Status**: Stable & Active
