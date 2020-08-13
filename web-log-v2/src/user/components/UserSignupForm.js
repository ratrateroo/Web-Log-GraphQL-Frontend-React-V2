import React from 'react';

import './UserSignupForm.css';

const UserSignupForm = props => {
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
               <label className="c-form-input__label" for="email">
                  Email:
               </label>
               <input
                  className="c-form-input__data"
                  type="email"
                  id="email"
                  name="email"
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

            <div className="c-form-input">
               <label className="c-form-input__label" for="first-name">
                  First Name:
               </label>
               <input
                  className="c-form-input__data"
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
               />
            </div>
            <div className="c-form-input">
               <label className="c-form-input__label" for="middle-name">
                  Middle Name:
               </label>
               <input
                  className="c-form-input__data"
                  type="text"
                  id="middle-name"
                  name="middle-name"
                  required
               />
            </div>
            <div className="c-form-input">
               <label className="c-form-input__label" for="last-name">
                  Last Name:
               </label>
               <input
                  className="c-form-input__data"
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
               />
            </div>

            <div className="c-form-button">
               <button className="c-form-button__submit" type="submit">
                  Sign Up
               </button>
            </div>
         </form>
      </div>
   );
};

export default UserSignupForm;
