import React from 'react';

import './UserItem.css';

const UserItem = props => {
   return (
      <li className="o-user-list__item">
         <div className="c-user">
            <div className="c-user__avatar">
               <img className="c-user__avatar-pic" src={props.image} alt={props.name} />
            </div>

            <div className="c-user__info">
               <h1 className="c-user__fullname">{props.name}</h1>
            </div>
         </div>
      </li>
   );
};

export default UserItem;
