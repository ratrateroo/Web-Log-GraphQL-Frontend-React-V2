import React from 'react';

import './UserLoginForm.css';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const UserLoginForm = props => {
   return (
      <div className="c-form">
         <form action="" className="c-form__body">
            <Input
               element="input"
               id="username"
               type="text"
               placeholder="Enter your username here!"
               label="Username:"
               validators={[VALIDATOR_REQUIRE()]}
               errorText="Please enter a valid username."
            />

            <Input
               element="input"
               id="password"
               type="password"
               placeholder="Enter your password here!"
               label="Password:"
               validators={[VALIDATOR_REQUIRE()]}
               errorText="Please enter a valid password."
            />

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
