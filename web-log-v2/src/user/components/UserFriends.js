import React from 'react';

import UserFriend from './UserFriend';
import './UserFriends.css';

const UserFriends = props => {
   return (
      <ul className="o-friend-list">
         {props.users.map(friend => (
            <UserFriend
               key={friend.id}
               id={friend.id}
               image={friend.image}
               name={friend.name}
               blogs={friend.blogs}
               friends={friend.friends}
            />
         ))}
      </ul>
   );
};

export default UserFriends;
