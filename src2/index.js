
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import configureStore from './config/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './DemoPages/Main';
import './assets/base.css';
import Login from './LoginComponents/Login';
import Register from './LoginComponents/Register';
import { createBrowserHistory } from 'history';

const rootElement = document.getElementById('root');


const store = configureStore();
const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter history={createBrowserHistory()}>
        <Route path={'/Login'} component={Login}/>
        <Route path={'/Register'} component={Register}/>
        <Component />
      </HashRouter>
    </Provider>
    , rootElement
  );
};

renderApp(Main);
