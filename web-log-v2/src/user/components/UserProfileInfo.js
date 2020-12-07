import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './UserProfileInfo.css';

const UserProfileInfo = props => {
   console.log('Start Render'); //=======================================
   let query = new URLSearchParams(useLocation().search);
   const [parameterValue, setParameterValue] = useState(null);
   const [loadedUser, setLoadedUser] = useState();
   const { isLoading, error, sendRequest, clearError } = useHttpClient();

   useEffect(
      () => {
         setParameterValue(query.get('uid'));
         console.log('Parameter Value: ', parameterValue);
         //setIsLoading(true);

         //use Immediately Invoked Function Expression inside async function
         //do not use async function inside useEffect
         const fetchUsers = async () => {
            try {
               if (parameterValue === null) {
                  console.log('null value', parameterValue);
               } else {
                  const responseData = await sendRequest(
                     `http://localhost:5000/users/profile/${parameterValue}`
                  );
                  //console.log('responsedata', responseData);
                  //console.log(responseData.user);
                  setLoadedUser(responseData.user);
               }
            } catch (err) {
               console.log(err);
            }
         };
         fetchUsers();
      },
      //added useEffect dependency because sendRequest function that is used
      //is coming from outside useEffect
      [sendRequest, parameterValue]
   );
   console.log(loadedUser);
   console.log('End Render'); //=======================================
   // console.log(loadedUser);

   return (
      <div className="c-user-profile">
         <div className="c-user-profile__image">
            <img className="c-user-profile__image-pic" src={parameterValue} alt={parameterValue} />
         </div>

         <div className="c-user-profile__info">
            <h2 className="c-user-profile__info__fullname">{parameterValue}</h2>
            <ul className="c-user-profile__info__detail-list">
               <li className="c-user-profile__info__detail-item">Blogs {parameterValue}</li>
               <li className="c-user-profile__info__detail-item">Friends {parameterValue}</li>
            </ul>
         </div>
      </div>
   );
};

export default UserProfileInfo;
