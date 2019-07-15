import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import DB from '../db';
import { NotFound } from "./Errors";
import Layout from "./Layout";
import Players from "./Players";
import Teams from './Teams';
import MySquad from './MySquad';
import Market from './Market';
import Championship from './Championship';
import Home from './Home';
import Admin from './Admin';
import { CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

class App extends Component {

  render() {

    return (
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/players" render={() => <Players />} />
                <Route path="/teams" render={() => <Teams />} />
                <Route path="/mySquad" render={() => <MySquad />} />
                <Route path="/market" render={() => <Market />} />
                <Route path="/championship" render={() => <Championship />} />
                <Route path="/admin" render={() => <Admin />} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </SnackbarProvider>
      </div>
    );
  }
}

export default App;
