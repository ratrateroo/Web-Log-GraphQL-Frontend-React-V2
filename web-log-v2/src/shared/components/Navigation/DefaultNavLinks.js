import React from 'react';
import { NavLink } from 'react-router-dom';

import './DefaultNavLinks.css';

const NavLinks = props => {
   return (
      <ul className="c-default-navigation__items">
         <li className="c-default-navigation__item">
            {/* <a href="../Blogs/Blogs.html" className="c-default-navigation__link">
               Blogs
            </a> */}
            <NavLink to="/u1/blogs" className="c-default-navigation__link" exact>
               Blogs
            </NavLink>
         </li>
         <li className="c-default-navigation__">
            {/* <a href="../User List/User List.html" className="c-default-navigation__link">
               Users
            </a> */}
            <NavLink to="/" className="c-default-navigation__link" exact>
               Users
            </NavLink>
         </li>
      </ul>
   );
};

export default NavLinks;
