import React from 'react';

import MainHeader from './MainHeader';
import DefaultNavLinks from './DefaultNavLinks';
import './DefaultNavigation.css';

const DefaultNavigation = props => {
   return (
      <div className="c-default-navigation">
         <DefaultNavLinks />
      </div>
   );
};

export default DefaultNavigation;
