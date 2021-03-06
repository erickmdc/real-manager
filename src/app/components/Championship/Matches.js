import React, { Fragment } from 'react';
import {
  withStyles, Grid, Typography, Avatar, Paper,
} from '@material-ui/core';
import styles from '../utils/styles';
import Match from './Match';

export default withStyles(styles)(({ classes, matches }) =>
  <Grid container>
    {matches.map((data, index) => {
      let round = index % 2;
      return (
      <Grid item key={index} lg={12} style={{ padding: '16px 0px'}}>
        {round === 0 && <Typography variant="h6">Rodada 1</Typography>}
        <Match match={data}/>
      </Grid>
    )})}
  </Grid>
);