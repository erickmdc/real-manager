import React from 'react';
import {
  withStyles, Grid, Typography, Avatar, Paper,
} from '@material-ui/core';
import styles from '../utils/styles';
import moment from 'moment';
moment.locale('pt-br');

class Match extends React.Component {

  render() {
    const { classes, boxShadow, noMargin, match: { date, home, away } } = this.props;


    return (
      <Paper style={boxShadow === 'none' ? { boxShadow: 'none' } : {}}>
        <Grid container spacing={2} alignItems="center" justify="center" style={noMargin ? { margin: '0px' } : {}}>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography variant="subtitle2" align="center" noWrap>{date ? moment(date).format('LLLL') : '-'}</Typography>
          </Grid>
          <Grid item sm={2} xs={2} lg={2}>
            <Typography variant="subtitle2" align="center">1º</Typography>
          </Grid>
          <Grid item sm={2} xs={2} lg={2}>
            <Avatar className={classes.teamAvatar} src="https://ssl.gstatic.com/images/branding/product/1x/contribute_36dp.png" />
          </Grid>
          <Grid item sm={4} xs={4} lg={4}>
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              {`${home && home.teamScore !== undefined ? home.teamScore : ''}
                x
              ${away && away.teamScore !== undefined ? away.teamScore : ''}`}
            </Typography>
          </Grid>
          <Grid item sm={2} xs={2} lg={2}>
            <Avatar className={classes.teamAvatar} src="https://ssl.gstatic.com/images/branding/product/1x/contribute_36dp.png" />
          </Grid>
          <Grid item sm={2} xs={2} lg={2}>
            <Typography variant="subtitle2" align="center">10º</Typography>
          </Grid>
          <Grid item sm={6} xs={6} lg={6}>
            <Typography variant="subtitle1" align="center" noWrap>{home ? home.teamName : 'À definir'}</Typography>
          </Grid>
          <Grid item sm={6} xs={6} lg={6}>
            <Typography variant="subtitle1" align="center" noWrap>{away ? away.teamName : 'À definir'}</Typography>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Match);