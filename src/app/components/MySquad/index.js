import React, { Component, Fragment } from 'react'
import {
    withStyles, Grid, Paper, Typography
} from '@material-ui/core';
import Squad from "./Squad";
import Resume from './Resume';
import styles from '../utils/styles';
import Points from './Points';

class MySquad extends Component {
    constructor() {
        super();
        this.state = {
            squad: []
        }
        this.handleSell = this.handleSell.bind(this);
    }    

    orderByPosition = (a, b) => {
        if (a.position === "Goleiro") return -1;
        if (a.position === b.position) return 0;
        return 1;
    }

    process = squad => {
        if (squad.length === 5) return squad;

        for (let x = squad.length; x < 5; x++) {
            squad.push({});
        }

        return squad.sort(this.orderByPosition);
    }

    handleSell(id) {
        fetch(`https://store-tcc.herokuapp.com/mySquad/1`)
            .then(res => res.json())
            .then(oldSquad => {
                console.log(oldSquad);
                const newSquad = oldSquad.players.filter(p => p.id !== id);
                return fetch('https://store-tcc.herokuapp.com/mySquad/1', {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ id: "1", players: newSquad })
                });
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                this.setState({ squad: result.players })
            });
    }

    componentDidMount() {
        fetch('https://store-tcc.herokuapp.com/mySquad/1')
            .then(res => res.json())
            .then(squad => {
                this.setState({ squad: squad.players })
            })
    }

    render() {
        const { squad } = this.state;
        const { classes } = this.props;
        return (
            <Fragment>
                <Paper className={classes.defaultPaper}>
                    <Grid container spacing={4}>
                        <Grid item sm={12} lg={8}>
                            <Typography variant="h5">Meu time</Typography>
                            <Squad squad={this.process(squad)} handleSell={this.handleSell}/>
                        </Grid>
                        <Grid item sm={12} lg={4}>
                            <Grid container spacing={4}>
                                <Grid item sm={12}>
                                    <Paper>
                                        <Resume />
                                    </Paper>
                                </Grid>
                                <Grid item sm={12} style={{width: '100%'}}>
                                    <Paper style={{ overflowY: 'auto', maxHeight: '400px' }}>
                                        <Points />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(MySquad)