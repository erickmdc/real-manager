import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    withStyles, Typography, Card,
    Button, Grid
} from '@material-ui/core';
import SquadPlayer from './SquadPlayer';
import styles from '../utils/styles';

class Squad extends Component {

    testFetch() {
        fetch('https://store-tcc.herokuapp.com/players')
            .then(res => res.json())
            .then(p => {
                let x = p;
                return x;
            })
    }

    render() {
        const { squad, classes, handleSell } = this.props;

        return (
            <Fragment>
                <Grid container spacing={1}>
                    {squad.map((player, index) => (
                        <Grid item sm={12} xs={12} key={index}>
                            <SquadPlayer player={player} handleSell={handleSell}/>
                        </Grid>
                    ))}
                    <Grid item sm={6} xs={12}>
                        <Button variant="contained" color="secondary" className={classes.button} fullWidth>
                            VENDER GERAL
                        </Button>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Button variant="contained" color="primary" className={classes.button} fullWidth>
                            SALVAR ESCALAÇÃO
                        </Button>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
};

export default withStyles(styles)(Squad)