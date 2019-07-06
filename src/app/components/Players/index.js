import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    List, ListItem, ListItemText, Paper, Grid, Avatar, ListItemAvatar, Typography,
    InputLabel, Select, MenuItem, FormControl, Input, Hidden, Box
} from "@material-ui/core";
import { Folder } from "@material-ui/icons";
import Player from './Player';
import MobileDialog from '../Layout/MobileDialog';
import styles from '../utils/styles';

class Players extends Component {
    state = {
        team: '',
        player: {},
        teams: [],
        players: [],
        openMobileDialog: false
    }

    filterPlayers = players => {
        const { team } = this.state;
        return (!team) ? players : players.filter(player => player.team === team);
    }

    handleTeamSelect = event => {
        this.setState({
            team: event.target.value
        });
    };

    handlePlayerSelect = id => {
        const { players } = this.state;
        this.setState({
            player: players.find(p => p.id === id),
            openMobileDialog: true
        })
    }

    handleClickOpen = () => {
        this.setState({ openMobileDialog: true });
    };

    handleClose = () => {
        this.setState({ openMobileDialog: false });
    };

    componentDidMount() {
        fetch('https://store-tcc.herokuapp.com/players')
            .then(res => {
                var x = res.json();
                return x;
            })
            .then(players => this.setState({ players }))
        fetch('https://store-tcc.herokuapp.com/teams')
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
                            <Typography variant="h5">Jogador</Typography>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Filtrar por time</InputLabel>
                                <Select
                                    value={team}
                                    onChange={this.handleTeamSelect}
                                    input={<Input className={classes.Input} />}
                                >
                                    <MenuItem value="">
                                        <em>Nenhum</em>
                                    </MenuItem>
                                    {teams.map(team => {
                                        return <MenuItem key={team.id} value={team.name}>
                                            {team.name}
                                        </MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <List component="nav">
                                {this.filterPlayers(players).map(player => {
                                    return <ListItem button key={player.id} onClick={() => this.handlePlayerSelect(player.id)}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Folder />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={player.name}
                                            secondary={player.team}
                                        />
                                    </ListItem>
                                })}
                            </List>
                        </Paper>
                    </Grid>
                    <Hidden smDown>
                        <Grid item sm={6} style={{ margin: 0 }}>
                            <Paper className={classes.defaultPaper}>
                                <Player player={player} />
                            </Paper>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <MobileDialog openMobileDialog={openMobileDialog} handleClose={this.handleClose}>
                            <Player player={player} />
                        </MobileDialog>
                    </Hidden>
                </Grid>
            </Box>
        );
    }
}

export default withStyles(styles)(Players);