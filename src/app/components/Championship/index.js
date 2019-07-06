import React, { Component, Fragment } from 'react'
import {
  withStyles, Grid, Paper, Typography, Hidden,
  AppBar, Tabs, Tab
} from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import styles from '../utils/styles';
import Table from './Table';
import Matches from './Matches';

function Footer() {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1" display="inline">
            {"J — "}
          </Typography>
          {"Jogos"}
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1" display="inline">
            {"V — "}
          </Typography>
          {"Vitórias"}
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1" display="inline">
            {"E — "}
          </Typography>
          {"Empates"}
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1" display="inline">
            {"D — "}
          </Typography>
          {"Derrotas"}
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1" display="inline">
            {"GM — "}
          </Typography>
          {"Gols Marcados"}
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1" display="inline">
            {"GS — "}
          </Typography>
          {"Gols Sofridos"}
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1" display="inline">
            {"SG — "}
          </Typography>
          {"Saldo de Gols"}
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Typography variant="subtitle1" display="inline">
            {"P — "}
          </Typography>
          {"Pontos"}
        </Grid>
      </Grid>
    </Paper>
  )
};

class Championship extends Component {
  state = {
    tab: 1
  }

  handleChange = (event, tab) => {
    this.setState({ tab });
  }

  render() {
    const { classes } = this.props;
    const { tab } = this.state;
    return (
      <Fragment>
        <Hidden mdDown>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} lg={8}>
              <Paper className={classes.defaultPaper}>
                <Typography variant="h5">Campeonato</Typography>
                <Paper className={classes.tablePaper}>
                  <Table />
                </Paper>
                <Footer />
              </Paper>
            </Grid>
            <Grid item sm={12} lg={4}>
              <Paper className={classes.defaultPaper}>
                <Matches />
              </Paper>
            </Grid>
          </Grid>
        </Hidden>
        <Paper className={classes.defaultPaper} style={{ padding: '8px' }}>
          <Hidden mdUp>
            <Grid container>
              <Grid item xs={12} xs={12}>
                <AppBar position="static">
                  <Tabs
                    value={tab}
                    onChange={this.handleChange}
                    variant="fullWidth"
                  >
                    <Tab icon={<FormatListNumberedIcon />} />
                    <Tab icon={<CalendarTodayIcon />} />
                  </Tabs>
                </AppBar>
                {tab === 0 &&
                  <Fragment>
                    <Paper className={classes.tablePaper}>
                      <Table />
                    </Paper>
                    <Footer />
                  </Fragment>}
                {tab === 1 &&
                  <Paper>
                    <Matches />
                  </Paper>}
              </Grid>
            </Grid>
          </Hidden>

        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Championship)