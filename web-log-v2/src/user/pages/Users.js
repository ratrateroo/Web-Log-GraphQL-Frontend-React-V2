import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import MainBody from '../../shared/components/UIElements/MainBody';
import image from '../../Images/profile pic.png';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Users = props => {
   // const USERS = [
   //    {
   //       id: 'u1',
   //       name: 'Mark Tarectecan',
   //       image: image,
   //       blogs: 1,
   //       friends: 5,
   //    },
   //    {
   //       id: 'u2',
   //       name: 'Mark Leo C. Tarectecan',
   //       image: image,
   //       blogs: 3,
   //       friends: 10,
   //    },
   //    {
   //       id: 'u3',
   //       name: 'Lei Tarectecan',
   //       image: image,
   //       blogs: 10,
   //       friends: 50,
   //    },
   // ];

   // const [isLoading, setIsLoading] = useState(false);
   // const [error, setError] = useState();
   const [loadedUsers, setLoadedUsers] = useState();

   const { isLoading, error, sendRequest, clearError } = useHttpClient();

   useEffect(
      () => {
         //setIsLoading(true);

         //use Immediately Invoked Function Expression inside async function
         //do not use async function inside useEffect
         const fetchUsers = async () => {
            try {
               const responseData = await sendRequest('http://localhost:5000/users');

               console.log(responseData.users);
               setLoadedUsers(responseData.users);
            } catch (err) {
               console.log(err);
            }
         };
         fetchUsers();
      },
      //added useEffect dependency because sendRequest function that is used
      //is coming from outside useEffect
      [sendRequest]
   );

   return (
      <MainBody title={props.title}>
         <ErrorModal error={error} onClear={clearError} />
         {isLoading && <LoadingSpinner asOverlay />}
         {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
      </MainBody>
   );
};

export default Users;
