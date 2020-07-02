import React from 'react';

import UserItem from './UserItem';
import './UserList.css';

const UsersList = props => {
   if (props.items.length === 0) {
      return (
         <div>
            <h2>No Users Found</h2>
         </div>
      );
   }

   return (
      <ul>
         {props.items.map(user => (
            <UserItem
               key={user.id}
               id={user.id}
               image={user.image}
               name={user.name}
               blogCount={user.blogs}
               friendCount={user.friends}
            />
         ))}
      </ul>
   );
};

export default UsersList;
