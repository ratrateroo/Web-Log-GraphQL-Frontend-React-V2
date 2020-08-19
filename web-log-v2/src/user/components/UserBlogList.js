import React from 'react';

import './UserBlogList.css';
import Button from '../../shared/components/FormElements/Button';

const UserBlogList = props => {
   return (
      <div className="c-blogs-list">
         <div role="grid" className="c-blogs-table">
            <div role="row" className="c-blogs-table__header">
               <div role="gridcell" className="c-blog-header__cell">
                  Blog No.
               </div>
               <div role="gridcell" className="c-blog-header__cell">
                  Title
               </div>
               <div role="gridcell" className="c-blog-header__cell">
                  Category
               </div>

               <div role="gridcell" className="c-blog-header__cell">
                  Created
               </div>
               <div role="gridcell" className="c-blog-header__cell">
                  Updated
               </div>
               <div role="gridcell" className="c-blog-header__cell">
                  Actions
               </div>
            </div>
            <a role="row" className="c-blogs-table__row" href="#">
               <div role="gridcell" className="c-blog-row__cell">
                  01
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  The Basics of Javascript
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Javascript
               </div>

               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  <div className="c-action-button">
                     <Button edit>Edit</Button>
                     <Button delete>Delete</Button>
                  </div>
               </div>
            </a>
            <a role="row" className="c-blogs-table__row" href="#">
               <div role="gridcell" className="c-blog-row__cell">
                  02
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  The Basics of Javascript
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Javascript
               </div>

               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  <div className="c-action-button">
                     <div className="c-action-button__edit">Edit</div>
                     <div className="c-action-button__delete">Delete</div>
                  </div>
               </div>
            </a>
            <a role="row" className="c-blogs-table__row" href="#">
               <div role="gridcell" className="c-blog-row__cell">
                  03
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  The Basics of Javascript
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Javascript
               </div>

               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  <div className="c-action-button">
                     <div className="c-action-button__edit">Edit</div>
                     <div className="c-action-button__delete">Delete</div>
                  </div>
               </div>
            </a>
            <a role="row" className="c-blogs-table__row" href="#">
               <div role="gridcell" className="c-blog-row__cell">
                  04
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  The Basics of Javascript
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Javascript
               </div>

               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  <div className="c-action-button">
                     <div className="c-action-button__edit">Edit</div>
                     <div className="c-action-button__delete">Delete</div>
                  </div>
               </div>
            </a>
            <a role="row" className="c-blogs-table__row" href="#">
               <div role="gridcell" className="c-blog-row__cell">
                  05
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  The Basics of Javascript
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Javascript
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  Jan-14-12
               </div>
               <div role="gridcell" className="c-blog-row__cell">
                  <div className="c-action-button">
                     <div className="c-action-button__edit">Edit</div>
                     <div className="c-action-button__delete">Delete</div>
                  </div>
               </div>
            </a>
         </div>
         <div className="c-form-button">
            <button className="c-form-button__createnew" type="submit">
               Create New
            </button>
         </div>
      </div>
   );
};

export default UserBlogList;
