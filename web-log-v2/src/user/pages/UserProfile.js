import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useParams, useLocation } from 'react-router-dom';

import MainBody from '../../shared/components/UIElements/MainBody';
import UserProfileInfo from '../components/UserProfileInfo';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

//import { makeQuery } from '../../shared/hooks/query-hook';

function useQuery() {
   return new URLSearchParams(useLocation().search);
}

const UserProfile = props => {
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

   let query = useQuery();

   const [userId, setUserId] = useState();

   const [loadedUser, setLoadedUser] = useState();

   const { isLoading, error, sendRequest, clearError } = useHttpClient();

   // const getQuery = () => {
   //    let query = makeQuery();
   //    const userIdFromParam = query.get('uid');
   //    setUserId(userIdFromParam);
   // };
   // useEffect(() => {
   //    getQuery();
   // }, []);

   useEffect(
      () => {
         //setIsLoading(true);

         //use Immediately Invoked Function Expression inside async function
         //do not use async function inside useEffect
         const fetchUsers = async () => {
            try {
               const responseData = await sendRequest(
                  `http://localhost:5000/users/profile/${userId}`
               );

               console.log(responseData.user);
               setLoadedUser(responseData.user);
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

   //const userId = useParams().userId;
   //const loadedUser = USERS.filter(user => user.id === userId);
   // const loadedUser = USERS.find(user => user.id === userId);

   return (
      <MainBody title={props.title}>
         {console.log(loadedUser)}
         <Router>
            <UserProfileInfo
               // key={loadedUser.id}
               // uid={id}
               // image={image}
               // name={name}
               // blogCount={blogs}
               // friendCount={friends}
               {...loadedUser[0]}
               userIdFromParam={query.get('uid')}
            />
         </Router>
      </MainBody>
   );
};

export default UserProfile;
