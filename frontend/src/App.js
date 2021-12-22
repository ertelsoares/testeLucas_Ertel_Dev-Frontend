import logo from './logo.svg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));
function App() {
  const classes = useStyles();

  return (
    <Grid  container direction="row" justifyContent="center" alignItems="center" >
      <Grid  item xs={8} style={{paddingTop:"25vh",paddingBottom:"25vh"}} >
          <Paper style={{paddingTop:"25vh",paddingBottom:"25vh"}} className={classes.paper}>
            <Grid container>
              <Grid item xs={6}>
                 <img src="/img/logo_xtrategie.png" />
              </Grid>
              <Grid item xs={6}>
                 
              </Grid>
            </Grid>
          </Paper>
        </Grid> 
    </Grid>
  );
}

export default App;
