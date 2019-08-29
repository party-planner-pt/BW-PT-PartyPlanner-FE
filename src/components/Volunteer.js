import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "70%",
    margin: "0 auto",
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: 20
  }
}));

function Volunteer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2 style={{ textAlign: "left" }}>Name of Potluck</h2>
          </Paper>
        </Grid>

        <Grid>
          <h1>Volunteer</h1>
          <Paper className={classes.paper}>
            <p>
              <strong>Message to Participants</strong>
            </p>
            <p>BYOB</p>
            <p>
              <strong>Allergies or dietary restrictions</strong>
            </p>
            <p>allergic to:</p>
          </Paper>
          <Grid>
            <Paper className={classes.paper}>
              {/* <StyledForm onSubmit={handleSubmit}>
              <SignUpWrapper>
                <label htmlFor="event_name" style={{ textAlign: "left" }}>
                  Event Name
                </label>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 25 }}
                  name="event_name"
                  label="Event Name"
                  type="text"
                  placeholder="Enter your Event Name"
                  value={values.event_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.event_name && touched.event_name && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.event_name && touched.event_name && (
                  <div className="feedback">{errors.username}</div>
                )}
                <label htmlFor="date" style={{ textAlign: "left" }}>
                  Date
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="date"
                  type="date"
                  placeholder="Enter your date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.date && touched.date && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.date && touched.date && (
                  <div className="feedback">{errors.date}</div>
                )}
                <label htmlFor="time" style={{ textAlign: "left" }}>
                  Time
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="time"
                  type="time"
                  placeholder="Enter your time"
                  value={values.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.time && touched.time && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.time && touched.time && (
                  <div className="feedback">{errors.time}</div>
                )}
                <label htmlFor="address" style={{ textAlign: "left" }}>
                  Address
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="address"
                  type="text"
                  placeholder="Enter address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.address && touched.address && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.address && touched.address && (
                  <div className="feedback">{errors.address}</div>
                )}
                <label htmlFor="city" style={{ textAlign: "left" }}>
                  City
                </label>
                <TextField
                  style={{ margin: 25 }}
                  name="city"
                  type="text"
                  placeholder="Enter city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.city && touched.city && "error"}
                  margin="normal"
                  variant="outlined"
                />
                {errors.city && touched.city && (
                  <div className="feedback">{errors.city}</div>
                )}
              </SignUpWrapper>
            </StyledForm> */}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Volunteer;
