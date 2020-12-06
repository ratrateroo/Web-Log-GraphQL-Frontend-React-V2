import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './UserProfileInfo.css';

const useQuery = () => {
   return new URLSearchParams(useLocation().search);
};

const UserProfileInfo = props => {
   const [parameterValue, setParameterValue] = useState('none');

   let query = useQuery();

   useEffect(() => {
      setParameterValue(query.get('uid'));
   }, [query]);

   const [userId, setUserId] = useState();

   const [loadedUser, setLoadedUser] = useState();

   const { isLoading, error, sendRequest, clearError } = useHttpClient();

   useEffect(
      () => {
         //setIsLoading(true);

         //use Immediately Invoked Function Expression inside async function
         //do not use async function inside useEffect
         const fetchUsers = async () => {
            try {
               const responseData = await sendRequest(
                  `http://localhost:5000/users/profile/${parameterValue}`
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

   console.log(parameterValue);
   console.log(loadedUser);

   return (
      <div className="c-user-profile">
         <div className="c-user-profile__image">
            <img className="c-user-profile__image-pic" src={props.image} alt={props.name} />
         </div>

         <div className="c-user-profile__info">
            <h2 className="c-user-profile__info__fullname">{props.userIdFromParam}</h2>
            <ul className="c-user-profile__info__detail-list">
               <li className="c-user-profile__info__detail-item">Blogs {props.blogs}</li>
               <li className="c-user-profile__info__detail-item">Friends {props.friends}</li>
            </ul>
         </div>
      </div>
   );
};

export default UserProfileInfo;
