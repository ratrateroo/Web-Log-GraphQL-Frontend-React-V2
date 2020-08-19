import React from 'react';

import './UserLoginForm.css';
import Button from '../../shared/components/FormElements/Button';
const UserLoginForm = props => {
   return (
      <div className="c-form">
         <form action="" className="c-form__body">
            <div className="c-form-input">
               <label className="c-form-input__label" for="username">
                  Username:
               </label>
               <input
                  className="c-form-input__data"
                  type="text"
                  id="username"
                  name="username"
                  required
               />
            </div>

            <div className="c-form-input">
               <label className="c-form-input__label" for="password">
                  Password:
               </label>
               <input
                  className="c-form-input__data"
                  type="password"
                  id="password"
                  name="password"
                  required
               />
            </div>

            <div className="c-form-button">
               <Button submit type="submit">
                  Log In
               </Button>
            </div>
         </form>
      </div>
   );
};

export default UserLoginForm;
