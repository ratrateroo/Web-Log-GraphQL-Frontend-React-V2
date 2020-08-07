import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewBlog from './blogs/pages/NewBlog';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainBody from './shared/components/UIElements/MainBody';

const App = () => {
   return (
      <Router>
         <MainNavigation />
         <Switch>
            <Route path="/" exact>
               <MainBody>
                  <Users />
               </MainBody>
            </Route>

            <Route path="/blogs/new" exact>
               <NewBlog />
            </Route>

            <Redirect to="/" />
         </Switch>
      </Router>
   );
};

export default App;
