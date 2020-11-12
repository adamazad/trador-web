import 'styled-components'
import { RebootTheme } from 'styled-reboot'
import { Theme } from 'styled-system'
import {
  ThemeBreakpoints,
  ThemeFontSizes,
  ThemeColors,
  ThemeFooter,
  ThemeHeader,
  ThemeRadii,
  ThemeFonts,
} from './styles/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends RebootTheme, Theme {
    header: ThemeHeader
    footer: ThemeFooter
    breakpoints: ThemeBreakpoints
    fonts: ThemeFonts
    fontSizes: ThemeFontSizes
    colors: ThemeColors
    radii: ThemeRadii
  }
}
