import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  InputAdornment, TextField, Paper, Grid, Avatar, Select, Typography,
  InputLabel, MenuItem, FormControl, Hidden, Box, Button
} from "@material-ui/core";
import styles from '../utils/styles';
import PlayerForm from './PlayerForm';
import Player from '../Players/Player';
import SnackBar from '../Layout/SnackBar';
import { withSnackbar } from 'notistack';

const fetchPost = (url, payload) => {
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(payload), // body data type must match "Content-Type" header
  }).then(res => {
    return res.json()
    .catch(err => { throw { error: res.statusText, message: err.message }})
    .then(result => {
      if(!res.ok) throw result;
      return result;
    });
  });
}

class Admin extends Component {
  state = {
    teams: [],
    player: {},
    snackOpen: false,
  }

  handleSnackClose = () => {
    this.setState({ snackOpen: false });
  }

  handleSubmitPlayer = player => {
    return fetchPost('http://localhost:4500/api/players', { players: [player] })
      .then(res => {
        const player = { ...res[0] };
        this.setState({ player: player });
        this.props.enqueueSnackbar('Jogador cadastrado com sucesso!', { variant: "success" });
      }).catch(err => {
        this.props.enqueueSnackbar(`${err.error} -> ${err.message}`, { variant: 'error' });
      });
  }

  componentDidMount() {
    fetch('http://localhost:4500/api/teams')
      .then(res => res.json())
      .then(teams => this.setState({ teams }))
  }

  render() {
    const { player, teams, snackOpen } = this.state;
    const { classes } = this.props;

    return (
      <Box component="span">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.defaultPaper}>
              <Typography variant="h6">
                {"Jogador"}
              </Typography>
              <PlayerForm teams={teams} handleSubmitPlayer={this.handleSubmitPlayer} />
            </Paper>
          </Grid>
          <Grid item sm={6} style={{ margin: 0 }}>
            <Paper className={classes.defaultPaper}>
              <Player player={player} />
            </Paper>
          </Grid>
        </Grid>
        <SnackBar open={snackOpen} handleClose={this.handleSnackClose} />
      </Box>
    );
  }
}

const styledComponent = withStyles(styles)(Admin);
export default withSnackbar(styledComponent);