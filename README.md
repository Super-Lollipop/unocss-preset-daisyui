# unocss-preset-daisyui

## Installation

```bash
npm i -D unocss daisyui unocss-preset-daisyui
```

## Usages

uno.config.ts

```typescript
import { defineConfig, presetUno } from 'unocss'
import presetDaisy from 'unocss-preset-daisyui'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy({ logs: false }),
  ],
})
```

## Options

Same as daisyui option

## NOTE

Some special prefixes('link-xx', 'file-xx') may conflict with variants in presetMini().

please use '_link-xx', '_file-xx' OR set prefiex in option to avoid conflict
