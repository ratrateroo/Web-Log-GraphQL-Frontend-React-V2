import React from 'react';

import MainHeader from './MainHeader';
import NavLinks from './DefaultNavLinks';
import './UserNavigation.css';

const UserNavigation = props => {
   return (
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
   );
};

export default UserNavigation;
