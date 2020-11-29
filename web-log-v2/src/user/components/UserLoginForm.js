import React, { useState, useContext } from 'react';

import './UserLoginForm.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
const UserLoginForm = () => {
   const auth = useContext(AuthContext);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState();

   const [isLoggedInMode, setIsLoggedInMode] = useState(true);

   const [formState, inputHandler] = useForm(
      {
         username: {
            value: '',
            isValid: true,
         },
         password: {
            value: '',
            isValid: true,
         },
      },
      false
   );

   // const loginSubmitHandler = event => {
   //    event.preventDefault();
   //    console.log(formState.inputs);
   //    auth.login();
   // };

   //converted to async await
   //
   const loginSubmitHandler = async event => {
      event.preventDefault();
      console.log(formState.inputs);
      try {
         setIsLoading(true);
         const response = await fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               username: formState.inputs.username.value,
               password: formState.inputs.password.value,
            }),
         });

         const responseData = await response.json();
         if (!response.ok) {
            throw new Error(responseData.message);
         }

         console.log(responseData);
         setIsLoading(false);
         auth.login();
      } catch (err) {
         console.log(err);
         setIsLoading(false);
         setError(err.message || 'Something went wrong, please try signing up again.');
      }
   };

   const errorHandler = () => {
      setError(null);
   };

   return (
      <React.Fragment>
         <ErrorModal error={error} onClear={errorHandler} />
         <div className="c-form">
            <form action="" className="c-form__body" onSubmit={loginSubmitHandler}>
               <Input
                  element="input"
                  id="username"
                  type="text"
                  placeholder="Enter your username here!"
                  label="Username:"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid username."
                  onInput={inputHandler}
               />

               <Input
                  element="input"
                  id="password"
                  type="password"
                  placeholder="Enter your password here!"
                  label="Password:"
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  errorText="Please enter a valid password with a minimum of 5 characters."
                  onInput={inputHandler}
               />

               <div className="c-form-button">
                  <Button submit disabled={!formState.isValid}>
                     Log In
                  </Button>
               </div>
            </form>
         </div>
      </React.Fragment>
   );
};

export default UserLoginForm;
