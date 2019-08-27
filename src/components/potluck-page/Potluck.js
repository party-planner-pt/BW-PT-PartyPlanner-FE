import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "70%",
    margin: "0 auto",
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: 20
  },
}));

function Potluck() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h3>Name of organizer</h3>
            <h2>Name of Potluck</h2>
            <h3>Date of Potluck</h3>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h3>Material UI textbox with email link</h3>
          </Paper>
          
          <Paper className={classes.paper}>
            <h3>Organizer</h3>
            <p>Organizer name</p>
            <p>Email (link)</p>
            <h3>Location</h3>
            <p>Address</p>
          </Paper>

        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h2>Food list component</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Potluck