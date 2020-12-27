import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './UserProfileInfo.css';

const UserProfileInfo = props => {
   console.log('Start Render'); //=======================================
   let query = new URLSearchParams(useLocation().search);
   const [parameterValue, setParameterValue] = useState(null);
   const [loadedUser, setLoadedUser] = useState({
      blogs: '',
      email: '',
      firstname: '',
      friends: '',
      id: '',
      image: '',
      lastname: '',
      middlename: '',
      password: '',
      username: '',
      _id: '',
      addon: '',
   });
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
                     `${process.env.REACT_APP_BACKEND_URL}/users/profile/${parameterValue}`
                  );
                  //console.log('responsedata', responseData);
                  //console.log(responseData.user);
                  setLoadedUser({ ...loadedUser, ...responseData.user });
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
            <img
               className="c-user-profile__image-pic"
               src={`${process.env.REACT_APP_BACKEND_URL}/${loadedUser.image}`}
               alt={loadedUser.username}
            />
         </div>

         <div className="c-user-profile__info">
            <h2 className="c-user-profile__info__fullname">{loadedUser.firstname}</h2>
            <ul className="c-user-profile__info__detail-list">
               <li className="c-user-profile__info__detail-item">
                  <Link to={`/blogs/${loadedUser.id}`}>Blogs {loadedUser.blogs.length}</Link>
               </li>
               <li className="c-user-profile__info__detail-item">
                  Friends {loadedUser.friends.length}
               </li>
            </ul>
         </div>
      </div>
   );
};

export default UserProfileInfo;
