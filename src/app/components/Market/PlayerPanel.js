import React, { Component, Fragment } from 'react';
import {
  withStyles, Typography, Button, Grid, Avatar, Paper,
  ExpansionPanel, ExpansionPanelActions, Divider,
  ExpansionPanelSummary, ExpansionPanelDetails, Hidden
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayerPanelDetails from './PlayerPanelDetails';
import styles from '../utils/styles';

class PlayerPanel extends Component {

  render() {
    const { player, classes, handleSell } = this.props;

    return (
      <ExpansionPanel style={{ marginLeft: '-12px', marginRight: '-12px', }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ padding: '0px 5px' }}
        >
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={12} lg={3}>
              <Grid container spacing={0} justify="flex-start" alignItems="center">
                <Grid item sm={3} lg={3}>
                  <Avatar className={classes.playerAvatar} src="https://ssl.gstatic.com/images/branding/product/2x/avatar_circle_blue_48dp.png" />
                </Grid>
                <Grid item sm={9} lg={9}>
                  <Typography variant="body1">
                    {player.name}
                  </Typography>
                  <Typography className={classes.pos} variant="subtitle1" color="textSecondary">
                    {player.team}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4} lg={7}>
              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item sm={6} lg={3}>
                  <Typography variant="body1">
                    17.50
                  </Typography>
                  <Typography color="textSecondary">
                    Última (pts)
                  </Typography>
                </Grid>
                <Hidden smDown>
                  <Grid item lg={3}>
                    <Typography variant="body1">
                      23.74
                    </Typography>
                    <Typography color="textSecondary">
                      Média (pts)
                    </Typography>
                  </Grid>
                  <Grid item lg={3}>
                    <Typography variant="body1">
                      +5.50
                    </Typography>
                    <Typography color="textSecondary">
                      Valorização ($)
                    </Typography>
                  </Grid>
                </Hidden>
                <Grid item sm={6} lg={3}>
                  <Typography variant="body1">
                    23.74
                  </Typography>
                  <Typography color="textSecondary">
                    Passe ($)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={2} lg={1}>
              <Typography variant="body1" noWrap>
                {player.position}
              </Typography>
              <Hidden smDown>
                <Typography color={"textSecondary"}>
                  {player.position}
                </Typography>
              </Hidden>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ padding: 0 }}>
          <PlayerPanelDetails />
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Grid container justify="flex-start">
            <Hidden smDown>
              <Grid item lg={1}>
                <Typography>{"Habilidade: "}</Typography>
              </Grid>
              <Grid item lg={7}>
                <Typography inline>{"Chute forte pra fora"}</Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} lg={4}>
              <Button onClick={() => handleSell(player.id)} variant="contained" color="secondary" fullWidth>
                {"Vender"}
              </Button>
            </Grid>
          </Grid>
        </ExpansionPanelActions>
      </ExpansionPanel>

    );
  }
};

export default withStyles(styles)(PlayerPanel);

{/* <Card className={classes.cardUnknown} key={index}>
                      <CardContent className={classes.cardContent}>
                          <Grid container justify="center" alignItems="center">
                              <Grid item sm={5} xs={8}>
                                  <Grid container alignItems="center">
                                      <Grid item sm={2} xs={2}>
                                          <Typography variant="body2" noWrap>
                                              Posição
                                      </Typography>
                                      </Grid>
                                      <Grid item sm={4} xs={4}>
                                          <Avatar className={classes.playerAvatar} src="https://ssl.gstatic.com/images/branding/product/2x/avatar_circle_blue_48dp.png" />
                                      </Grid>
                                      <Grid item sm={6} xs={6}>
                                          <Typography variant="body2">
                                              Jogador
                                      </Typography>
                                          <Typography className={classes.pos} color="textSecondary">
                                              Time
                                      </Typography>
                                      </Grid>
                                  </Grid>
                              </Grid>
                              <Grid item sm={3} xs={4}>
                                  <Grid container justify="center" alignItems="center">
                                      <Grid item xs={7}>
                                          <Typography variant="body2">
                                              -
                                      </Typography>
                                          <Typography color="textSecondary">
                                              (pts)
                                      </Typography>
                                      </Grid>
                                      <Grid item xs={5}>
                                          <Typography variant="body2">
                                              -
                                      </Typography>
                                          <Typography color="textSecondary">
                                              ($)
                                      </Typography>
                                      </Grid>
                                  </Grid>
                              </Grid>
                              <Grid item sm={2} xs={6}>
                                  <Grid container alignItems="flex-end" justify="center">
                                      <Grid item sm={1}></Grid>
                                      <Grid item sm={4} xs={4}>
                                          <Avatar className={classes.teamAvatar} src="https://ssl.gstatic.com/images/branding/product/1x/contribute_36dp.png" />
                                      </Grid>
                                      <Grid item xs={2}>
                                          <Typography variant="h5" style={{ textAlign: 'center' }}>
                                              X
                                          </Typography>
                                      </Grid>
                                      <Grid item sm={4} xs={4}>
                                          <Avatar className={classes.teamAvatar} src="https://ssl.gstatic.com/images/branding/product/1x/contribute_36dp.png" />
                                      </Grid>
                                      <Grid item sm={1}></Grid>
                                  </Grid>
                              </Grid>
                              <Grid item sm={2} xs={6}>
                                  <Link to="/Market">
                                      <Button className={classes.actionButton} variant="contained" color="primary">  
                                              Comprar
                                      </Button>
                                  </Link>
                              </Grid>
                          </Grid>
                      </CardContent>
                  </Card> */}