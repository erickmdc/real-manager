import React, { Component, Fragment } from 'react';
import {
  withStyles, Typography, Button, Grid, Avatar, Paper,
  Divider, Tabs, Tab, Hidden, AppBar
} from '@material-ui/core';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import InfoIcon from '@material-ui/icons/Info';
import HistoryIcon from '@material-ui/icons/History';
import Points from '../MySquad/Points';
import Match from '../Championship/Match';
import styles from '../utils/styles';

class PlayerPanelDetails extends Component {
  state = {
    tab: 1
  }

  handleChange = (event, tab) => {
    this.setState({ tab })
  }

  render() {
    const { classes, match } = this.props;
    const { tab } = this.state;

    return (
      <Fragment>
        <Hidden smDown>
          <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item lg={6}>
              <Match boxShadow={'none'} match={match} />
            </Grid>
            <Grid item lg={6}>
              <Paper style={{ maxHeight: '200px', overflowY: 'auto', boxShadow: 'none' }}>
                <Points />
              </Paper>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Paper style={{ width: '100%' }}>
            <AppBar position="static">
              <Tabs value={tab} onChange={this.handleChange} variant="fullWidth">
                <Tab icon={<GolfCourseIcon />} />
                <Tab icon={<InfoIcon />} />
                <Tab icon={<HistoryIcon />} />
              </Tabs>
            </AppBar>
            {tab === 0 &&
              <Paper>
                <Typography variant="h6">Próxima partida</Typography>
                <Divider variant="inset" />
                <Match noMargin={true} />
              </Paper>
            }
            {tab === 1 &&
              <Paper>
                <Typography variant="h6">Info</Typography>
                <Divider variant="inset" />
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={4}>
                    <Typography variant="body1">
                      {"17.50"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {"Última (pts)"}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1">
                      {"15.32"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {"Média (pts)"}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1">
                      {"Ala"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {"Posição"}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1">
                      {"5.00"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {"Preço ($)"}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1">
                      {"+ 2.03"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {"Valorização ($)"}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1">
                      {"Chute forte pra fora"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {"Habilidade"}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>}
            {tab === 2 &&
              <Paper style={{ maxHeight: '200px', overflowY: 'auto' }}>
                <Points />
              </Paper>}
          </Paper>
        </Hidden>
      </Fragment>
    );
  }
};

export default withStyles(styles)(PlayerPanelDetails);