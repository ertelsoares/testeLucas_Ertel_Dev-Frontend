import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Forms from './components/forms';
import Box from '@material-ui/core/Box';

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
  const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '5rem', height: '15rem' },
    borderColor: 'text.primary',
  };
  return (
    <Grid  container direction="row" justifyContent="center" alignItems="center" >
      <Grid  item xs={8} style={{paddingTop:"25vh",paddingBottom:"25vh"}} >
          <Paper  className={classes.paper}>
            <Grid container>
              <Grid item lg={5}  borderRight={1}  {...defaultProps}  >
                 <img src="/img/logo_xtrategie.png" style={{width:"100%"}} />
              </Grid>
              <Grid item lg={1}  >
              <Box borderRight={1} {...defaultProps} />
              </Grid>
              <Grid item lg={5}>
                 <Forms/>
              </Grid>
            </Grid>
          </Paper>
        </Grid> 
    </Grid>
  );
}

export default App;
