import React from 'react';

import MainHeader from './MainHeader';
import './MainNavigation.css';

const MainNavigation = props => {
   return (
      <MainHeader>
         <nav className="c-navigation">
            <div className="c-main-navigation">
               <ul className="c-main-navigation__items">
                  <li className="c-main-navigation__item">
                     <a href="../Blogs/Blogs.html" className="c-main-navigation__link">
                        Blogs
                     </a>
                  </li>
                  <li className="c-main-navigation__">
                     <a href="../User List/User List.html" className="c-main-navigation__link">
                        Users
                     </a>
                  </li>
               </ul>
            </div>
            <div className="c-user-navigation">
               <ul className="c-user-navigation__items">
                  <li className="c-user-navigation__item">
                     <a href="../Signup/Signup.html" className="c-user-navigation__link">
                        Signup
                     </a>
                  </li>
                  <li className="c-user-navigation__item">
                     <a href="../Login/Login.html" className="c-user-navigation__link">
                        Login
                     </a>
                  </li>
                  <li className="c-user-navigation__item">
                     <a href="../Blogs/Blogs.html" className="c-user-navigation__link">
                        Logout
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </MainHeader>
   );
};

export default MainNavigation;
