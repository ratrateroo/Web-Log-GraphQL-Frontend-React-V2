import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import Blogs from './blogs/pages/Blogs';
import UserProfile from './user/pages/UserProfile';

import UserLogin from './user/pages/UserLogin';
import UserSignup from './user/pages/UserSignup';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainFooter from './shared/components/UIElements/MainFooter';

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

            <Route path="/signup" exact>
               <UserSignup title="User Signup" />
            </Route>

            <Redirect to="/" />
         </Switch>
         <MainFooter />
      </Router>
   );
};

export default App;
