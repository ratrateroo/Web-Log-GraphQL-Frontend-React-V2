import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import Blogs from './blogs/pages/Blogs';
import Blog from './blogs/pages/Blog';
import CreateBlog from './blogs/pages/CreateBlog';
import UpdateBlog from './blogs/pages/UpdateBlog';

import UserBlogs from './user/pages/UserBlogs';
import UserProfile from './user/pages/UserProfile';

import UserFriendList from './user/pages/UserFriendList';

import UserLogin from './user/pages/UserLogin';
import UserSignup from './user/pages/UserSignup';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainFooter from './shared/components/UIElements/MainFooter';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const login = useCallBack(() => {
      setIsLoggedIn(true);
   }, []);

   const logout = useCallBack(() => {
      setIsLoggedIn(false);
   }, []);

   return (
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
         <Router>
            <MainNavigation />
            <Switch>
               <Route path="/" exact>
                  <Users title="Users" />
               </Route>

               <Route path="/:userId/blogs" exact>
                  <UserBlogs title="User Blogs" />
               </Route>

               <Route path="/:userId/profile" exact>
                  <UserProfile title="User Profile" />
               </Route>

               <Route path="/:userId/friends" exact>
                  <UserFriendList title="User Profile" />
               </Route>

               <Route path="/login" exact>
                  <UserLogin title="User Login" />
               </Route>

               <Route path="/signup" exact>
                  <UserSignup title="User Signup" />
               </Route>

               <Route path="/blogs" exact>
                  <Blogs title="Blogs" />
               </Route>

               <Route path="/blogs/new" exact>
                  <CreateBlog title="Create Blog" />
               </Route>

               <Route path="/blogs/:blogId" exact>
                  <UpdateBlog title="Update Blog" />
               </Route>

               <Route path="/:uid/:blogId" exact>
                  <Blog title="<Username>'s Blog" />
               </Route>

               <Redirect to="/" />
            </Switch>
            <MainFooter>Welcome to the Blog</MainFooter>
         </Router>
      </AuthContext.Provider>
   );
};

export default App;
