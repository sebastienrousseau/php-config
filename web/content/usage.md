---
title: "Usage — @sebastienrousseau/php-config"
description: "How to use and configure @sebastienrousseau/php-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/php-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/php-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/php-config";
console.log(config.defaultPreset);
```
