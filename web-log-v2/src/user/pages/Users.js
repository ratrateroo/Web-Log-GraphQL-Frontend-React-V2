import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import MainBody from '../../shared/components/UIElements/MainBody';
import image from '../../Images/profile pic.png';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
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

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState();
   const [loadedUsers, setLoadedUsers] = useState();

   useEffect(() => {
      setIsLoading(true);

      //use Immediately Invoked Function Expression inside async function
      //do not use async function inside useEffect
      const sendRequest = async () => {
         try {
            const response = await fetch('http://localhost:5000/users');

            const responseData = await response.json();
            if (!response.ok) {
               throw new Error(responseData.message);
            }
            console.log(responseData.users);
            setLoadedUsers(responseData.users);
         } catch (err) {
            setError(err.message);
         }
         setIsLoading(false);
      };
      sendRequest();
   }, []);

   const errorHandler = () => {
      setError(null);
   };

   return (
      <MainBody title={props.title}>
         <ErrorModal error={error} onClear={errorHandler} />
         {isLoading && <LoadingSpinner asOverlay />}
         {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
      </MainBody>
   );
};

export default Users;
