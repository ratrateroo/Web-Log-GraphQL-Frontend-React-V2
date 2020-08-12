import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import Blogs from './blogs/pages/Blogs';
import UserProfile from './user/pages/UserProfile';

import UserLogin from './user/pages/UserLogin';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
   return (
      <Router>
         <MainNavigation />
         <Switch>
            <Route path="/" exact>
               <Users title="Users" />
            </Route>

            <Route path="/blogs" exact>
               <Blogs title="Blogs" />
            </Route>

            <Route path="/:userId/profile" exact>
               <UserProfile title="User Profile" />
            </Route>

            <Route path="/login" exact>
               <UserLogin title="User Login" />
            </Route>

            <Redirect to="/" />
         </Switch>
      </Router>
   );
};

export default App;
