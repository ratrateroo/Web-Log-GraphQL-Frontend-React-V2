import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import Blogs from './blogs/pages/Blogs';
import Blog from './blogs/pages/Blog';
import CreateBlog from './blogs/pages/CreateBlog';
import UpdateBlog from './blogs/pages/UpdateBlog';

import UserBlogs from './user/pages/UserBlogs';
import UserProfile from './user/pages/UserProfile';

import UserFriends from './user/pages/UserFriends';

import UserLogin from './user/pages/UserLogin';
import UserSignup from './user/pages/UserSignup';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainFooter from './shared/components/UIElements/MainFooter';
import { AuthContext } from './shared/context/auth-context';
import UsersList from './user/components/UsersList';

import TestApp from './testing/pages/TestApp';
import TestApp2 from './testing/pages/TestApp2';

const App = () => {
   let routes;

   if (token) {
      routes = (
         <Switch>
            <Route path="/blog/new" exact>
               <CreateBlog title="Create Blog" />
            </Route>

            <Route path="/blog/update/:bid">
               <UpdateBlog title="Update Blog" />
            </Route>

            <Route path="/profile/update/:uid" exact>
               <UserProfile title="User Update Profile" />
            </Route>

            {
               //LoggedIn or not Routes
            }

            <Route path="/" exact>
               <Blogs title="Blogs" />
            </Route>
            <Route path="/users" exact>
               <Users title="Users" />
            </Route>

            <Route path="/blogs/:uid" exact>
               <UserBlogs title="User Blogs" />
            </Route>

            <Route path="/blog/:bid" exact>
               <Blog title="<Username>'s Blog" />
            </Route>

            <Route path="/friends/:uid" exact>
               <UserFriends title="<Username>'s Friends" />
            </Route>

            <Route path="/profile/:uid" exact>
               <UserProfile title="User Profile" />
            </Route>

            <Redirect to="/" />
         </Switch>
      );
   } else {
      routes = (
         <Switch>
            <Route path="/" exact>
               <Blogs title="Blogs" />
            </Route>
            <Route path="/test" exact>
               <TestApp />
            </Route>

            <Route path="/test2" exact>
               <TestApp2 />
            </Route>
            <Route path="/users" exact>
               <Users title="Users" />
            </Route>

            <Route path="/blogs/:uid" exact>
               <UserBlogs title="User Blogs" />
            </Route>

            <Route path="/blog/:bid" exact>
               <Blog title="<Username>'s Blog" />
            </Route>

            <Route path="/friends/:uid" exact>
               <UserFriends title="<Username>'s Friends" />
            </Route>

            <Route path="/profile/:uid" exact>
               <UserProfile title="User Profile" />
            </Route>

            <Route path="/login" exact>
               <UserLogin title="User Login" />
            </Route>

            <Route path="/signup" exact>
               <UserSignup title="User Signup" />
            </Route>

            <Redirect to="/login" />
         </Switch>
      );
   }

   return (
      <AuthContext.Provider
         value={{ isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout }}
      >
         <Router>
            <MainNavigation />
            {routes}
            <MainFooter>Welcome to the Blog</MainFooter>
         </Router>
      </AuthContext.Provider>
   );
};

export default App;
