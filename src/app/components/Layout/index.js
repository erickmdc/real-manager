import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Hidden, Drawer, CssBaseline, MenuList, MenuItem } from '@material-ui/core';
import { Menu } from "@material-ui/icons";
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        height: '100vh'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    }
});

class Layout extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, location: { pathname }, children } = this.props;
        const { mobileOpen } = this.state;

        const drawer = (
            <div>
                <Hidden smDown>
                    <div className={classes.toolbar} />
                </Hidden>
                <MenuList>
                    <MenuItem component={Link} to="/" selected={'/' === pathname}>
                        <Typography variant="body2">Home</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/players" selected={'/players' === pathname}>
                        <Typography variant="body2">Players</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/teams" selected={'/teams' === pathname}>
                        <Typography variant="body2">Teams</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/mySquad" selected={'/mySquad' === pathname}>
                        <Typography variant="body2">Minha Esquadra</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/market" selected={'/market' === pathname}>
                        <Typography variant="body2">Mercadão</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/championship" selected={'/championship' === pathname}>
                        <Typography variant="body2">Campeonato</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/admin" selected={'/admin' === pathname}>
                        <Typography variant="body2">Admin</Typography>
                    </MenuItem>
                </MenuList>
            </div>
        );

        return (
            <Fragment>
                <CssBaseline />
                <div className={classes.root}>
                    <AppBar position="absolute" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <Menu />
                            </IconButton>
                            <Typography variant="h4" color="inherit" noWrap>
                                Bacana F.C.
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        {children}
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(Layout);