import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './store/reducer'
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './App';
import {AboutUs} from './components/AboutUs'
import {ContactUs} from './components/ContactUs'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {BaseLayout} from './components/BaseLayout'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
  <BaseLayout>
  <Switch>
    <Route path="/contact-us" component={ContactUs} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="/" component={App} />
  </Switch>
  </BaseLayout>
  </BrowserRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
