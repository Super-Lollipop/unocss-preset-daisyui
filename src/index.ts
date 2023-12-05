import type { Preset } from 'unocss'
import type { Config } from 'daisyui'
import daisy from 'daisyui'
import presetComponent from 'unocss-preset-component'
import type { Style } from 'unocss-preset-component'
import autoprefixer from 'autoprefixer'

export default function presetDaisyui(option?: Config): Preset {
  option = option ?? {}
  const styles: Style[] = []
  daisy.handler({
    addBase: (style: Style) => {
      styles.push(style)
    },
    addComponents: (style: Style) => {
      styles.push(style)
    },
    config: (path: string, defaultValue?: string) => {
      return path.slice('daisyui.'.length).split('.').reduce((_, curr) => {
        return (option as any)?.[curr] ?? defaultValue
      }, defaultValue)
    },
  } as any)

  return {
    ...presetComponent({
      style: styles,
      layer: 'daisyui',
      postcssPlugins: [
        autoprefixer(),
        {
          postcssPlugin: 'repalce-varibale-prefix',
          Declaration: (decl) => {
            decl.prop = decl.prop.replaceAll(/(var\s*\(\s*)?--(?:tw-)+([-\w]+)?/g, '$1--un-$2')
            decl.value = decl.value.replaceAll(/(var\s*\(\s*)?--(?:tw-)+([-\w]+)?/g, '$1--un-$2')
          },
        },
      ],
    }),
    name: 'unocss-preset-daisyui',
    theme: {
      colors: daisy.config?.theme?.extend?.colors,
    },
  }
}
