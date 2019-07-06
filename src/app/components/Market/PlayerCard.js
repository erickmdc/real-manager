import React from 'react';
import {
    withStyles, Typography, Card,
    CardContent, Button, Grid, Avatar
} from '@material-ui/core';
import styles from '../utils/styles';

export default withStyles(styles)(({ player, classes, handleSell, handleBuy }) =>
    <Card className={classes.playerCard}>
        <CardContent className={classes.playerCardContent}>
            <Grid container justify="center" alignItems="center">
                <Grid item sm={3} xs={12}>
                    <Grid container alignItems="center">
                        <Grid item xs={4}>
                            <Avatar className={classes.playerAvatar} src="https://ssl.gstatic.com/images/branding/product/2x/avatar_circle_blue_48dp.png" />
                        </Grid>
                        <Grid item sm={7} xs={8}>
                            <Typography variant="body1">
                                {player.name}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {player.team}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={4}>
                            <Typography variant="h6">
                                17.50
                            </Typography>
                            <Typography color="textSecondary">
                                Última (pts)
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6">
                                15.32
                            </Typography>
                            <Typography color="textSecondary">
                                Média (pts)
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6">
                                {player.position}
                            </Typography>
                            <Typography color="textSecondary">
                                Posição
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6">
                                {player.price}
                            </Typography>
                            <Typography color="textSecondary">
                                Preço ($)
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6">
                                + 2.03
                            </Typography>
                            <Typography color="textSecondary">
                                Valorização ($)
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={2} xs={6}>
                    <Grid container alignItems="flex-end">
                        <Grid item sm={5} xs={4}>
                            <Avatar className={classes.teamAvatar} src="https://ssl.gstatic.com/images/branding/product/1x/contribute_36dp.png" />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h5" style={{ textAlign: 'center' }}>
                                X
                            </Typography>
                        </Grid>
                        <Grid item sm={5} xs={4}>
                            <Avatar className={classes.teamAvatar} src="https://ssl.gstatic.com/images/branding/product/1x/contribute_36dp.png" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={2} xs={6}>
                    {(player.isOnSquad)
                        ?
                        <Button className={classes.actionButton} onClick={() => handleSell(player.id)} variant="contained" color="secondary">
                            Vender
                        </Button>
                        :
                        <Button className={classes.actionButton} onClick={() => handleBuy(player.id)} variant="contained" color="primary">
                            Comprar
                        </Button>
                    }
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);