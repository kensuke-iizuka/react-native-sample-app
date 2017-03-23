import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
// import { fetchTextUpdate, fetchInputNumber } from './actions/IndexAction';
// import reducers from './reducers/IndexReducer';
import Login from './containers/Login';
import MapHome from './containers/MapHome';
import Camera from './containers/Camera';

export default class TestCameraApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="Login" hideNavBar initial component={Login} title="Login" />
            <Scene key="MapHome" hideNavBar component={MapHome} title="MapHome" />
            <Scene key="Camera" hideNavBar component={Camera} title="Camera" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
