import React, { Component, Fragment } from 'react';
import {
    withStyles, Typography, Button,
    Paper, CircularProgress, Hidden,
    Snackbar, Fab, Toolbar, AppBar, Grid
} from '@material-ui/core';
import { Sort } from '@material-ui/icons';
import Filter from './Filter';
import MobileDialog from '../Layout/MobileDialog';
import PlayerCard from './PlayerCard';
import PlayerPanel from './PlayerPanel';
import styles from '../utils/styles';

class Market extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            openMobileDialog: false,
            openSnack: false,
            orderBy: 'price',
            players: [],
            teams: [],
            squad: [],
            filters: {
                team: '',
                name: '',
                position: '',
                price: ''
            },
            positions: [
                { id: 'goalkeeper', description: 'Goleiro' },
                { id: 'fixed', description: 'Fixo' },
                { id: 'wing', description: 'Ala' },
                { id: 'pivot', description: 'Pivô' }
            ],
            sorts: [
                { id: 'highPrice', description: 'Mais caro' },
                { id: 'lowPrice', description: 'Mais barato' },
                { id: 'average', description: 'Média' },
                { id: 'evaluation', description: 'Valorização' },
                { id: 'name', description: 'Nome' }
            ]
        };

        this.handleSell = this.handleSell.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
        this.handleCloseSnack = this.handleCloseSnack.bind(this);
    }


    handleClick = () => {
        this.setState({ openMobileDialog: true });
    };

    handleClose = () => {
        this.setState({ openMobileDialog: false });
    };

    handleNameInput = value => {
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                name: value
            }
        }))
    }

    handlePriceInput = value => {
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                price: value
            }
        }))
    }

    handleTeamSelect = event => {
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                team: event.target.value
            }
        }));
    }

    handlePositionSelect = event => {
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                position: event.target.value
            }
        }))
    }
    handleSortSelect = orderBy => {
        return;
    }

    filterByTeam = player => {
        const { filters: { team } } = this.state;
        return (!team) ? player : player.team === team;
    }

    filterByName = player => {
        const { filters: { name } } = this.state;
        return (!name) ? player : player.name.toLowerCase().includes(name.toLowerCase());
    }

    filterByPosition = player => {
        const { filters: { position } } = this.state;
        return (!position) ? player : player.position === position;
    }

    refine = players => {
        const { squad } = this.state;
        players = players.map(player => {
            if (squad.some(p => p.id === player.id))
                player.isOnSquad = true;
            else
                player.isOnSquad = false;
            return player;
        })
        return players.filter(this.filterByTeam)
            .filter(this.filterByName)
            .filter(this.filterByPosition);
    }

    handleSell(id) {
        fetch(`http://localhost:3002/mySquad/1`)
            .then(res => res.json())
            .then(oldSquad => {
                console.log(oldSquad);
                const newSquad = oldSquad.players.filter(p => p.id !== id);
                return fetch('http://localhost:3002/mySquad/1', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: "1", players: newSquad })
                });
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                this.setState({ squad: result.players })
            });
    }

    handleBuy(id) {
        fetch(`http://localhost:3002/mySquad/1`)
            .then(res => res.json())
            .then(oldSquad => {
                console.log(oldSquad);
                if (oldSquad.players.length < 5) {
                    const { players } = this.state;
                    const player = players.find(p => p.id === id);
                    delete player['isOnSquad'];
                    const newSquad = oldSquad.players.concat(player);
                    return fetch('http://localhost:3002/mySquad/1', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: "1", players: newSquad })
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            this.setState({ squad: result.players })
                        });
                }
                else {
                    this.setState({ openSnack: true })
                }
            })
    }

    handleCloseSnack() {
        this.setState({ openSnack: false })
    }

    componentDidMount() {
        fetch('https://store-tcc.herokuapp.com/mySquad/1')
            .then(res => res.json())
            .then(squad => this.setState({ squad: squad.players }))
        fetch('http://localhost:4500/api/players')
            .then(res => res.json())
            .then(players => this.setState({ players }))
        fetch('http://localhost:4500/api/teams')
            .then(res => res.json())
            .then(teams => this.setState({ teams }))
    }

    render() {
        const { filters, positions, sorts, orderBy, loading, openMobileDialog, teams, players, openSnack } = this.state;
        const { classes } = this.props;

        return (
            <Paper className={classes.defaultPaper}>
                <Typography variant="h5">Mercadão</Typography>
                <Hidden smDown>
                    <Paper className={classes.paper}>
                        <Filter positions={positions} teams={teams} sorts={sorts}
                            team={filters.team} position={filters.position} orderBy={orderBy}
                            onNameInput={this.handleNameInput} onPriceInput={this.handlePriceInput}
                            onTeamSelect={this.handleTeamSelect} onPositionSelect={this.handlePositionSelect}
                            onSortSelect={this.handleSortSelect}
                        />
                    </Paper>
                </Hidden>
                <Hidden mdUp>
                    <AppBar position="fixed" color="primary" className={classes.marketBar}>
                        <Toolbar style={{ padding: 4 }}>
                            <Grid container justify="space-between" alignItems="flex-end">
                                <Grid item>
                                    <Typography variant="body1" align="center">80.92</Typography>
                                    <Typography variant="body2" align="center">Valor do time ($)</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" align="center">125.32/125.12</Typography>
                                    <Typography variant="body2" align="center">Carteira ($)</Typography>
                                </Grid>
                            </Grid>
                            <Fab color="secondary" className={classes.fab} onClick={this.handleClick}>
                                <Sort />
                            </Fab>
                        </Toolbar>
                    </AppBar>
                    <MobileDialog openMobileDialog={openMobileDialog} handleClose={this.handleClose}>
                        <div>
                            <Filter positions={positions} teams={teams} sorts={sorts}
                                team={filters.team} position={filters.position} orderBy={orderBy}
                                onNameInput={this.handleNameInput} onPriceInput={this.handlePriceInput}
                                onTeamSelect={this.handleTeamSelect} onPositionSelect={this.handlePositionSelect}
                                onSortSelect={this.handleSortSelect}
                            />
                        </div>
                    </MobileDialog>
                </Hidden>
                
                {loading ? (<CircularProgress className={classes.progress} />) :
                    this.refine(players).map((player, index) => {
                        return <PlayerPanel player={player} key={index} handleSell={this.handleSell} handleBuy={this.handleBuy} />
                    })}
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={openSnack}
                    autoHideDuration={3000}
                    onClose={this.handleCloseSnack}
                    message="Seu elenco já possui 5 jogadores!"
                    className={classes.margin}
                />
            </Paper>
        );
    }
}

export default withStyles(styles)(Market);