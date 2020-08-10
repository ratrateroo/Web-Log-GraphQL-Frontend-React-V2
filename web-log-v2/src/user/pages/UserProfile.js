import React from 'react';
import { useParams } from 'react-router-dom';

import MainBody from '../../shared/components/UIElements/MainBody';

useParams();

const UserProfile = props => {
   const userId = userParams.userId();
   return (
      <MainBody title={props.title}>
         <UserProfileInfo items={USERS} />
      </MainBody>
   );
};

export default UserProfile;
