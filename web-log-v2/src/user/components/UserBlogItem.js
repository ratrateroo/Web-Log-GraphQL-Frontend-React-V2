import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import './UserBlogItem.css';

import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';

const UserBlogItem = props => {
   const auth = useContext(AuthContext);
   const { uid } = useParams();
   return (
      <li key={props.id}>
         <div role="row" className="c-blogs-table__row">
            <div role="gridcell" className="c-blog-row__cell">
               {props.id}
            </div>
            <div role="gridcell" className="c-blog-row__cell">
               {props.title}
            </div>
            <div role="gridcell" className="c-blog-row__cell">
               {props.category}
            </div>

            <div role="gridcell" className="c-blog-row__cell">
               {props.created}
            </div>
            <div role="gridcell" className="c-blog-row__cell">
               {props.edited}
            </div>
            {auth.userId === uid && (
               <div role="gridcell" className="c-blog-row__cell">
                  <div className="c-action-button">
                     <Button edit>Edit</Button>
                     <Button delete onClick={props.onClick}>
                        Delete
                     </Button>
                  </div>
               </div>
            )}
         </div>
      </li>
   );
};

export default UserBlogItem;
