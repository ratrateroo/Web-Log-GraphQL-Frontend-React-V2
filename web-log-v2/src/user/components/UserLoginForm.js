import React, { useCallback, useReducer } from 'react';

import './UserLoginForm.css';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const formReducer = (state, action) => {
   switch (action.type) {
      case 'INPUT_CHANGE':
         let formIsValid = true;
         for (const inputId in state.inputs) {
            if (inputId === action.inputId) {
               formIsValid = formIsValid && action.isValid;
            } else {
               formIsValid = formIsValid && state.inputs[inputId].isValid;
            }
         }
         return {
            ...state,
            inputs: {
               ...state.inputs,
               [action.inputId]: {
                  value: action.value,
                  isValid: action.isValid,
               },
            },
            isValid: formIsValid,
         };
      default:
         return state;
   }
};

const UserLoginForm = () => {
   const [formState, dispatch] = useReducer(formReducer, {
      inputs: {
         username: {
            value: '',
            isValid: false,
         },
         password: {
            value: '',
            isValid: false,
         },
      },
      isValid: false,
   });

   const inputHandler = useCallback((id, value, isValid) => {
      dispatch({ type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id });
   }, []);

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
               onInput={inputHandler}
            />

            <Input
               element="input"
               id="password"
               type="password"
               placeholder="Enter your password here!"
               label="Password:"
               validators={[VALIDATOR_REQUIRE()]}
               errorText="Please enter a valid password."
               onInput={inputHandler}
            />

            <div className="c-form-button">
               <Button submit disabled={!formState.isValid}>
                  Log In
               </Button>
            </div>
         </form>
      </div>
   );
};

export default UserLoginForm;
