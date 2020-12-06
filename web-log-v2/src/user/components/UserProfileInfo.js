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
   const [parameterValue, setParameterValue] = useState();

   let query = useQuery();
   console.log('1', query);
   useEffect(() => {
      console.log('2', parameterValue);
      setParameterValue(query.get('uid'));
   }, [query]);

   const [userId, setUserId] = useState();

   const [loadedUser, setLoadedUser] = useState();

   const { isLoading, error, sendRequest, clearError } = useHttpClient();
   console.log('3', parameterValue);
   useEffect(
      () => {
         console.log('4', parameterValue);
         //setIsLoading(true);

         //use Immediately Invoked Function Expression inside async function
         //do not use async function inside useEffect
         const fetchUsers = async () => {
            try {
               console.log('5', parameterValue);
               const responseData = await sendRequest(
                  `http://localhost:5000/users/profile/${parameterValue}`
               );
               console.log('data', responseData);
               //console.log(responseData.user);
               //setLoadedUser(responseData.user);
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

   console.log('6', parameterValue);
   // console.log(loadedUser);

   return (
      <div className="c-user-profile">
         <h1>{parameterValue}</h1>
         <div className="c-user-profile__image">
            <img className="c-user-profile__image-pic" src={props.image} alt={props.name} />
         </div>

         <div className="c-user-profile__info">
            <h2 className="c-user-profile__info__fullname">{props.name}</h2>
            <ul className="c-user-profile__info__detail-list">
               <li className="c-user-profile__info__detail-item">Blogs {props.blogs}</li>
               <li className="c-user-profile__info__detail-item">Friends {props.friends}</li>
            </ul>
         </div>
      </div>
   );
};

export default UserProfileInfo;
