import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';

const UserLogin = props => {
   return (
      <MainBody title={props.title}>
         <UserLoginForm />
      </MainBody>
   );
};

export default UserLogin;
