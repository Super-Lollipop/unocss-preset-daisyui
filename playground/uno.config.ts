import { defineConfig, presetUno } from 'unocss'
import presetDaisy from 'unocss-preset-daisyui'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy(),
  ],
})
