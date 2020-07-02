import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
   const USERS = [
      {
         id: 'u1',
         name: 'Mark Tarectecan',
         image:
            'https://avatars1.githubusercontent.com/u/35805968?s=400&amp;u=dca0a0c19e5951c9a93d038c97c17e7eea4480d2&amp;v=4" ',
         blogs: 1,
         friends: 5,
      },
   ];

   return <UsersList items={USERS} />;
};

export default Users;
