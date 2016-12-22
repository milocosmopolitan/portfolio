import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/* IMPORT */
// import Root from './components/Root';
// import Home from './components/Home';

import * as Components from './index-components';

// import Login from './components/Login';
// import Signup from './components/Signup';
// import UserList from './components/User/UserList';
// import UserDetail from './components/User/UserDetail';
// import StoryList from './components/Story/StoryList';
// import StoryDetail from './components/Story/StoryDetail';
// import { fetchUsers } from './redux/users';
// import { fetchStories } from './redux/stories';

/* -----------------    COMPONENT     ------------------ */


const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Components.Root}>
      <IndexRoute component={Components.Home} />      
      <Route path="*" component={Components.Home} />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = null

export default connect(mapProps, mapDispatch)(Routes);
