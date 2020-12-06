import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.css';

const UserItem = props => {
   return (
      <li className="o-user-list__item" key={props.id}>
         <Link to={`profile/:uid?uid=${props.id}`}>
            <div className="c-user">
               <div className="c-user__avatar">
                  <img className="c-user__avatar-pic" src={props.image} alt={props.image} />
               </div>

               <div className="c-user__info">
                  <h1 className="c-user__fullname">{props.firstname}</h1>
               </div>
            </div>
         </Link>
      </li>
   );
};

export default UserItem;
