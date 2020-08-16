import React from 'react';

import { useParams } from 'react-router-dom';

import MainBody from '../../shared/components/UIElements/MainBody';
import UserFriends from '../components/UserFriends';

const UserFriendList = props => {
   const USERS = [
      {
         id: 'u1',
         name: 'Mark Tarectecan',
         image:
            'https://avatars1.githubusercontent.com/u/35805968?s=400&amp;u=dca0a0c19e5951c9a93d038c97c17e7eea4480d2&amp;v=4" ',
         blogs: 1,
         friends: 5,
      },
      {
         id: 'u2',
         name: 'Mark Leo C. Tarectecan',
         image:
            'https://avatars1.githubusercontent.com/u/35805968?s=400&amp;u=dca0a0c19e5951c9a93d038c97c17e7eea4480d2&amp;v=4" ',
         blogs: 3,
         friends: 10,
      },
      {
         id: 'u3',
         name: 'Lei Tarectecan',
         image:
            'https://avatars1.githubusercontent.com/u/35805968?s=400&amp;u=dca0a0c19e5951c9a93d038c97c17e7eea4480d2&amp;v=4" ',
         blogs: 10,
         friends: 50,
      },
   ];

   const userId = useParams().userId;
   const loadedUser = USERS.filter(user => user.id === userId);
   return (
      <MainBody title={props.title}>
         <UserFriends users={USERS} />
      </MainBody>
   );
};

export default UserFriendList;
