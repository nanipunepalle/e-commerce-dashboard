import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
      type: "dark",
      primary: {
        main: '#FFFFFF',
        dark: '#FFFFFF',
        light: '#000000'
      },
      secondary: {
        main: '#0f4c75',
      },
      background:{
        default: "#000000"
      }
    },
    
});


export {darkTheme};