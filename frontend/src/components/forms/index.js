import React from 'react';
import { makeStyles,createTheme,ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Senha from "../Senha";
import Button from '@material-ui/core/Button';
import { green} from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const theme = createTheme({
  palette: {
    primary: green,
  },
});
function Forms() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="E-mail" variant="filled" />
      <Senha />
      <ThemeProvider theme={theme}>
        <Button variant="outlined" color="primary" className={classes.margin}>
          ENVIAR
        </Button>
      </ThemeProvider>
  
    </form>
  );
}


export default Forms;