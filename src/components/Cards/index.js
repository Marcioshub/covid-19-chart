import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Grow,
  CircularProgress,
} from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

export default function Cards(props) {
  const [state, setState] = useState();

  useEffect(() => {
    //console.log("inside cards:", props.data);
    setState(props.data);
  }, [props.data]);

  if (!state) {
    return <CircularProgress size={50} />;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grow in={true}>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={state.confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(state.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active CODIV-19 cases
              </Typography>
            </CardContent>
          </Grid>
        </Grow>
        <Grow in={true}>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={state.recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(state.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of Recovered CODIV-19 cases
              </Typography>
            </CardContent>
          </Grid>
        </Grow>
        <Grow in={true}>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={state.deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(state.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths caused by CODIV-19
              </Typography>
            </CardContent>
          </Grid>
        </Grow>
      </Grid>
    </div>
  );
}
