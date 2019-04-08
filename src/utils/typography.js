import Typography from "typography";
import theme from 'typography-theme-de-young'

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'li': {
     marginBottom: 0,
  }
})

const typography = new Typography(
    theme
);

export default typography;
