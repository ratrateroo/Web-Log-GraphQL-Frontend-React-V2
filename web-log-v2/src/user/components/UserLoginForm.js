import React from 'react';

import './UserLoginForm.css';

const UserLoginForm = props => {
   // if (props.user.length === 0) {
   //    return (
   //       <div>
   //          <h2>User Profile Unavailable!</h2>
   //       </div>
   //    );
   // }

   return (
      <div class="c-form">
         <form action="" class="c-form__body">
            <div class="c-form-input">
               <label class="c-form-input__label" for="username">
                  Username:
               </label>
               <input
                  class="c-form-input__data"
                  type="text"
                  id="username"
                  name="username"
                  required
               />
            </div>

            <div class="c-form-input">
               <label class="c-form-input__label" for="password">
                  Password:
               </label>
               <input
                  class="c-form-input__data"
                  type="password"
                  id="password"
                  name="password"
                  required
               />
            </div>

            <div class="c-form-button">
               <button class="c-form-button__submit" type="submit" class="button">
                  Log In
               </button>
            </div>
         </form>
      </div>
   );
};

export default UserLoginForm;
