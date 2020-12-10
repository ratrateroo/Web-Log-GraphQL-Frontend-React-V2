import React, { useState } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';

import './UserSignupForm.css';

const UserSignupForm = props => {
   // already used in custom hook
   // const [isLoading, setIsLoading] = useState(false);
   // const [error, setError] = useState();

   const { isLoading, error, sendRequest, clearError } = useHttpClient();

   const [formState, inputHandler] = useForm(
      {
         username: {
            value: '',
            isValid: false,
         },
         email: {
            value: '',
            isValid: false,
         },
         password: {
            value: '',
            isValid: false,
         },
         firstname: {
            value: '',
            isValid: false,
         },
         middlename: {
            value: '',
            isValid: false,
         },
         lastname: {
            value: '',
            isValid: false,
         },
         image: {
            value: null,
            isValid: false,
         },
      },
      false
   );

   const signupSubmitHandler = async event => {
      event.preventDefault();
      //try {
      //used inside custom hook
      //setIsLoading(true);

      console.log(formState.inputs);

      const responseData = await sendRequest(
         'http://localhost:5000/users/signup',
         'POST',
         JSON.stringify({
            username: formState.inputs.username.value,
            password: formState.inputs.password.value,
            email: formState.inputs.email.value,
            firstname: formState.inputs.firstname.value,
            middlename: formState.inputs.middlename.value,
            lastname: formState.inputs.lastname.value,
            image: 'profileimagetext',
            blogs: [{}],
            friends: [{}],
         }),
         {
            'Content-Type': 'application/json',
         }
      );
      //used inside custom hook
      // const responseData = await response.json();
      // if (!response.ok) {
      //    throw new Error(responseData.message);
      // }

      console.log(responseData);
      // } catch (err) {
      //    console.log(err);
      //    setError(err.message || 'Something went wrong, please try signing up again.');
      // }
      // setIsLoading(false);
   };

   return (
      <React.Fragment>
         <ErrorModal error={error} onClear={clearError} />
         <div className="c-form">
            {isLoading && <LoadingSpinner asOverlay />}
            <form onSubmit={signupSubmitHandler} className="c-form__body">
               <ImageUpload id="image" onInput={inputHandler} />
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
                  id="email"
                  type="email"
                  placeholder="Enter your email here!"
                  label="Email:"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid email."
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

               <Input
                  element="input"
                  id="firstname"
                  type="text"
                  placeholder="Enter your firstname here!"
                  label="First Name:"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid firstname."
                  onInput={inputHandler}
               />

               <Input
                  element="input"
                  id="middlename"
                  type="text"
                  placeholder="Enter your middlename here!"
                  label="Middle Name:"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid middlename."
                  onInput={inputHandler}
               />

               <Input
                  element="input"
                  id="lastname"
                  type="text"
                  placeholder="Enter your lastname here!"
                  label="Last Name:"
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Please enter a valid lastname."
                  onInput={inputHandler}
               />

               <div className="c-form-button">
                  <Button submit disabled={!formState.isValid}>
                     Sign Up
                  </Button>
               </div>
            </form>
         </div>
      </React.Fragment>
   );
};

export default UserSignupForm;
