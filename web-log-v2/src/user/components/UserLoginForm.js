import React, { useState, useContext } from 'react';

import './UserLoginForm.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
const UserLoginForm = () => {
   const auth = useContext(AuthContext);
   // already used in custom hook
   // const [isLoading, setIsLoading] = useState(false);
   // const [error, setError] = useState();

   //const [isLoggedInMode, setIsLoggedInMode] = useState(true);

   const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
         const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + '/users/login',
            'POST',
            JSON.stringify({
               username: formState.inputs.username.value,
               password: formState.inputs.password.value,
            }),
            {
               'Content-Type': 'application/json',
            }
         );
         auth.login(responseData.userId, responseData.token);
      } catch (err) {
         //optional catch block
         //all errors has been handled inside the custom hook
         console.log(err);
      }
   };

   const errorHandler = () => {
      clearError();
   };

   return (
      <React.Fragment>
         <ErrorModal error={error} onClear={errorHandler} />
         <div className="c-form">
            {isLoading && <LoadingSpinner asOverlay />}
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
