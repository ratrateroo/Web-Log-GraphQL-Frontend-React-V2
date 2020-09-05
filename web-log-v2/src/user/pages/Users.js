import React from 'react';

import UsersList from '../components/UsersList';
import MainBody from '../../shared/components/UIElements/MainBody';
import image from '../../Images/profile pic.png';
const Users = props => {
   const USERS = [
      {
         id: 'u1',
         name: 'Mark Tarectecan',
         image: image,
         blogs: 1,
         friends: 5,
      },
      {
         id: 'u2',
         name: 'Mark Leo C. Tarectecan',
         image: image,
         blogs: 3,
         friends: 10,
      },
      {
         id: 'u3',
         name: 'Lei Tarectecan',
         image: image,
         blogs: 10,
         friends: 50,
      },
   ];

   return (
      <MainBody title={props.title}>
         <UsersList items={USERS} />
      </MainBody>
   );
};

export default Users;
