import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
   if (props.href) {
      return <a className="c-form-button__link">{props.children}</a>;
   }
   if (props.to) {
      return (
         <Link
         // to={props.to}
         // exact={props.exact}
         // className={`button button--${props.size || 'default'} ${
         //    props.inverse && 'button--inverse'
         // } ${props.danger && 'button--danger'}`}
         >
            {props.children}
         </Link>
      );
   }
   return (
      <button
         className={`${props.submit && 'c-form-button__submit'} 
                     ${props.edit && 'c-form-button__edit'}
                     ${props.delete && 'c-form-button__delete'}
                     `}
         type={props.type}
      >
         {props.children}
      </button>
   );
};

export default Button;
