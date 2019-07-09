import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemText, Paper, Grid, Avatar, ListItemAvatar, Typography,
  InputLabel, Select, MenuItem, FormControl, Input, Hidden, Box
} from "@material-ui/core";
import styles from '../utils/styles';

class Players extends Component {
  state = {
    team: '',
    player: {},
    teams: [],
    players: [],
    openMobileDialog: false
  }

  componentDidMount() {
    fetch('http://localhost:4500/api/players')
      .then(res => {
        var x = res.json();
        return x;
      })
      .then(players => this.setState({ players }))
    fetch('http://localhost:4500/api/teams')
      .then(res => res.json())
      .then(teams => this.setState({ teams }))
  }

  render() {
    const { team, player, openMobileDialog, players, teams } = this.state;
    const { classes } = this.props;

    return (
      <Box component="span">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.defaultPaper}>
            </Paper>
          </Grid>
          <Grid item sm={6} style={{ margin: 0 }}>
            <Paper className={classes.defaultPaper}>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(Players);