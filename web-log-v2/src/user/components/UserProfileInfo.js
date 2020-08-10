import React from 'react';

import UserItem from './UserItem';
import './UsersList.css';

const UsersList = props => {
   if (props.items.length === 0) {
      return (
         <div>
            <h2>No Users Found</h2>
         </div>
      );
   }

   return (
      <div className="c-user-profile">
         <div className="c-user-profile__image"></div>

         <div className="c-user-profile__info">
            <h2 className="c-user-profile__info__fullname">Daisy Johnson</h2>
            <ul className="c-user-profile__info__detail-list">
               <li className="c-user-profile__info__detail-item">1 Blog</li>
               <li className="c-user-profile__info__detail-item">2 Friends</li>
            </ul>
         </div>
      </div>
   );
};

export default UsersList;
