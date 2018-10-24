import React, { Component } from 'react';
// import { BrowserRouter as Router, Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import './App.css';
import AppBar from './AppComponents/AppBar/AppBar';
import Dashboard from './PageComponents/Dashboard/Dashboard';
import View from './PageComponents/View/View';
import Input from './PageComponents/Input/Input';
import Admin from './PageComponents/Admin/Admin';
import './AppContainer.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="appContainer">
        <AppBar appName={"PDMS"}></AppBar>
        <div className="appBody">
          <Switch>
            <Route exact path='/' render={(props) => <Dashboard {...props} isAuthed={true} />} />
            <Route path='/dashboard/' render={(props) => <Dashboard {...props} isAuthed={true} />}></Route>
            <Route path='/dataInput' render={(props) => <Input {...props} isAuthed={true} />}></Route>
            <Route path='/dataView' render={(props) => <View {...props} isAuthed={true} />}></Route>
            <Route path='/admin' render={(props) => <Admin {...props} isAuthed={true} />}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppContainer;
