import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//import Users from './user/pages/Users';
//import Blogs from './blogs/pages/Blogs';
//import Blog from './blogs/pages/Blog';
//import CreateBlog from './blogs/pages/CreateBlog';
//import UpdateBlog from './blogs/pages/UpdateBlog';

//import UserBlogs from './user/pages/UserBlogs';
//import UserProfile from './user/pages/UserProfile';

//import UserFriends from './user/pages/UserFriends';

//import UserLogin from './user/pages/UserLogin';
import UserSignup from './user/pages/UserSignup';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import MainFooter from './shared/components/UIElements/MainFooter';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import UsersList from './user/components/UsersList';

import TestApp from './testing/pages/TestApp';
import TestApp2 from './testing/pages/TestApp2';

const Users = React.lazy(() => import('./user/pages/Users'));
const Blogs = React.lazy(() => import('./blogs/pages/Blogs'));
const Blog = React.lazy(() => import('./blogs/pages/Blog'));
const CreateBlog = React.lazy(() => import('./blogs/pages/CreateBlog'));
const UpdateBlog = React.lazy(() => import('./blogs/pages/UpdateBlog'));
const UserBlogs = React.lazy(() => import('./user/pages/UserBlogs'));
const UserProfile = React.lazy(() => import('./user/pages/UserProfile'));
const UserFriends = React.lazy(() => import('./user/pages/UserFriends'));
const UserLogin = React.lazy(() => import('./user/pages/UserLogin'));
const UserSignup = React.lazy(() => import('./user/pages/UserSignup'));

const App = () => {
   const { token, login, logout, userId } = useAuth();

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
            <Suspense
               fallback={
                  <div>
                     <LoadingSpinner />
                  </div>
               }
            >
               {routes}
            </Suspense>
            <MainFooter>Welcome to the Blog</MainFooter>
         </Router>
      </AuthContext.Provider>
   );
};

export default App;
