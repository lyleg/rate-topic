import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { topicsReducer } from '../reducers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import { createHistory } from 'history';


// containers
import App from './containers/';
import AddTopic from './containers/add-topic';
import TopicDetails from './containers/topic-details';
import TopicList from './containers/topic-list';

const reducer = combineReducers({
  routing: routeReducer,
  topics: topicsReducer
});

const store = createStore(reducer);
const history = createHistory();

syncReduxAndRouter(history, store);

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app');
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={TopicList}/>
          <Route path="add" component={AddTopic}/>
          <Route path="topics/:id" component={TopicDetails}/>
        </Route>
      </Router>
    </Provider>,
    rootElement
  );
});
