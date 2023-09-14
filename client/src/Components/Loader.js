import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/material/styles"; // Updated import
import CircularProgress from "@mui/material/CircularProgress"; // Updated import
import { Grid, Box, Typography } from "@mui/material"; // Updated import

const useStyles = makeStyles((theme) => ({
  progressContainer: {
    height: "91.5vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Loader = ({ text }) => {
  return (
    <>
      <Box style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress color="primary" size="80px" />
        <Box m={3} />
        <Typography variant="h5" color="primary">
          {text}
        </Typography>
      </Box>
    </>
  );
};

export function CircularIndeterminate(props) {
  const classes = useStyles();
  const { SIZE } = props;
  return (
    <Grid item xs={12} sm={12} className={classes.progressContainer}>
      <CircularProgress
        size={SIZE}
        className={classes.progress}
        color="secondary"
      />
    </Grid>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};
