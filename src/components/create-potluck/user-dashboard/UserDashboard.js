import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Events = props => {
  let id = props.match.params.id
  let ls = localStorage.getItem("token");
  console.log("ls", ls)
  console.log("LS", localStorage)

  useEffect(() => {
    axios
      .post(`https://potluck-planner-bw.herokuapp.com/users/${props.match.params.id}/events`, values )
      .then(res => {
        console.log(res);
        setEvent(res.data);
        let id = res.data.event_id
        props.history.push(`/events/${id}/createpotluckform`);
      })
      .catch(err => console.log(err.response));
  }, []);

  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2)
    }
  }));
  // export default function PaperSheet() {
  const classes = useStyles();
  return (
    <div>
      <h1 style={{ textAlign: "left", backgroundColor: "#F5F5F5" }}>
        My Dashboard
      </h1>
      <Paper className={classes.root}>
        <Typography component="p">
          <div style={{ backgroundColor: "#F5F5F5" }}>
            <p>
              Below is a list of all of the events you have created or have been
              invited to participate in.
            </p>
          </div>
        </Typography>
        <Typography variant="h5" component="h3">
          You are not currently a participant in any meal trains
        </Typography>
        <Typography component="p">
          To organize a potluck event, click
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Get Started
          </Button>
        </Typography>
        <Typography component="p">
          To create a potluck meal, click
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Create Meal
          </Button>
        </Typography>
      </Paper>
    </div>
  );
};

export default Events;
