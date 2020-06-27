import Typography from "typography"
import Wordpress2012 from "typography-theme-wordpress-2012"
import {colors} from "../styles/colors";

Wordpress2012.overrideThemeStyles = () => {
  return {

    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "p": {
      fontSize: `18px`,
    },
    "h1": {
      fontSize: `34px`,
    },
    "h2": {
      fontSize: `26px`,
    },
    "h3": {
      fontSize: `22px`,
    },
    "a, a:visited": {
      color: colors.flutterBlue,
      textDecoration: "none",
    },
    "a:hover": {
      color: colors.primary,
    },

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
