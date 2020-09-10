import React from 'react';

import './UserFriend.css';

const UserFriends = props => {
   return (
      <li className="o-friend-list__item" key={props.key}>
         <div className="c-mini-user">
            <div className="c-mini-user__avatar">
               <img className="c-mini-user__avatar-pic" src={props.image} alt={props.name} />
            </div>

            <div className="c-mini-user__info">
               <h1 className="c-mini-user__fullname">{props.name}</h1>
            </div>
         </div>
      </li>
   );
};

export default UserFriends;
