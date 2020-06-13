import Typography from "typography"
import Wordpress2012 from "typography-theme-wordpress-2012"
import {colors} from "../styles/colors";

Wordpress2012.overrideThemeStyles = () => {
  return {

    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1": {
      fontSize: `40px`,
      margin: 0,
      lineHeight: 2,
    },
    "h2": {
      fontSize: `24px`,
      margin: 0,
    },
    "a": {
      color: colors.flutterBlue,
      textDecoration: "none",
    }

  }
}

delete Wordpress2012.googleFonts

const typography = new Typography(Wordpress2012)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
