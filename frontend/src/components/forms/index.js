import React,{ useState }  from 'react';
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
  const [nome,setnome] = useState([]);
  const [senha,setsenha] = useState([]);
 function  gravar(e){
    e.preventDefault();
    console.log(nome);
    console.log(senha);
 } 

  const classes = useStyles();
  return (
    <form onSubmit = {gravar} className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="E-mail" variant="filled" value={nome}
      onChange={e => setnome(e.target.value)}/>
      <Senha value={senha}
      onChange={e => setsenha(e.target.value)}/>
      <ThemeProvider theme={theme}>
        <Button type="submit" variant="outlined" color="primary" className={classes.margin}>
          ENVIAR
        </Button>
      </ThemeProvider>
  
    </form>
  );
}


export default Forms;