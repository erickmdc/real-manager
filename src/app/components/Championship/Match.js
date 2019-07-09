import React from 'react';
import {
  withStyles, Grid, Typography, Avatar, Paper,
} from '@material-ui/core';
import styles from '../utils/styles';
import moment from 'moment';
moment.locale('pt-br');
export default withStyles(styles)(({ classes, boxShadow, noMargin, match }) =>
  <Paper style={boxShadow === 'none' ? {boxShadow: 'none'} : {}}>
    <Grid container spacing={2} alignItems="center" justify="center" style={noMargin ? {margin: '0px'} : {}}>
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="subtitle2" align="center" noWrap>{moment(match.date).format('LLLL')}</Typography>
      </Grid>
      <Grid item sm={2} xs={2} lg={2}>
        <Typography variant="subtitle2" align="center">1º</Typography>
      </Grid>
      <Grid item sm={2} xs={2} lg={2}>
        <Avatar className={classes.teamAvatar} src="https://ssl.gstatic.com/images/branding/product/1x/contribute_36dp.png" />
      </Grid>
      <Grid item sm={4} xs={4} lg={4}>
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          {`${match.homeScore} x ${match.awayScore}`}
        </Typography>
      </Grid>
      <Grid item sm={2} xs={2} lg={2}>
        <Avatar className={classes.teamAvatar} src="https://ssl.gstatic.com/images/branding/product/1x/contribute_36dp.png" />
      </Grid>
      <Grid item sm={2} xs={2} lg={2}>
        <Typography variant="subtitle2" align="center">10º</Typography>
      </Grid>
      <Grid item sm={6} xs={6} lg={6}>
        <Typography variant="subtitle1" align="center" noWrap>{match.homeName}</Typography>
      </Grid>
      <Grid item sm={6} xs={6} lg={6}>
        <Typography variant="subtitle1" align="center" noWrap>{match.awayName}</Typography>
      </Grid>
    </Grid>
  </Paper>
);