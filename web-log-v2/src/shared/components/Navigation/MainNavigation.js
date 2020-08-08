import React from 'react';

import MainHeader from './MainHeader';
import NavLinks from './DefaultNavLinks';
import './MainNavigation.css';
import DefaultNavigation from './DefaultNavigation';
import UserNavigation from './UserNavigation';

const MainNavigation = props => {
   return (
      <MainHeader>
         <nav className="c-navigation">
            <DefaultNavigation />
            <UserNavigation />
         </nav>
      </MainHeader>
   );
};

export default MainNavigation;
