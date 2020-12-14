import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './CreateBlogPost.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const CreateBlogPost = props => {
   const auth = useContext(AuthContext);
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
   const [formState, inputHandler] = useForm(
      {
         title: {
            value: '',
            isValid: true,
         },
         content: {
            value: '',
            isValid: true,
         },
         category: {
            value: 'testing',
            isValid: true,
         },
         edited: {
            value: 'testing',
            isValid: true,
         },
         created: {
            value: 'testing',
            isValid: true,
         },
         author: {
            value: 'testing',
            isValid: true,
         },
         image: {
            value: '',
            isValid: true,
         },
         likes: {
            value: '0',
            isValid: true,
         },
         comments: {
            value: '0',
            isValid: true,
         },
      },
      false
   );

   const history = useHistory();

   const createBlogHandler = async event => {
      event.preventDefault();
      try {
         const formData = new FormData();
         formData.append('title', formState.inputs.title.value);
         formData.append('content', formState.inputs.content.value);
         formData.append('category', formState.inputs.category.value);
         formData.append('edited', formState.inputs.edited.value);
         formData.append('created', formState.inputs.created.value);
         formData.append('creator', auth.userId);
         formData.append('author', auth.userId);
         formData.append('image', formState.inputs.image.value);
         formData.append('likes', formState.inputs.likes.value);
         formData.append('comments', formState.inputs.comments.value);
         await sendRequest('http://localhost:5000/blogs', 'POST', formData, {
            Authorization: 'Bearer ' + auth.token,
         });
         history.push('/');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="c-form-blog">
         <ErrorModal error={error} onClear={clearError} />
         <form onSubmit={createBlogHandler} className="c-form-blog__body">
            {isLoading && <LoadingSpinner asOverlay />}
            <ImageUpload
               id={'image'}
               onInput={inputHandler}
               errorText={'Please provide an image.'}
            />
            <Input
               id="title"
               element="input"
               type="text"
               label="Title"
               validators={[VALIDATOR_REQUIRE()]}
               errorText="Please enter a valid title."
               onInput={inputHandler}
            />

            <Input
               id="content"
               element="textarea"
               label="Content"
               validators={[VALIDATOR_MINLENGTH(5)]}
               errorText="Please enter a valid content with a minimum of 5 characters"
               onInput={inputHandler}
            />
            <div className="c-form-blog__button">
               <div className="c-form-blog__button-holder">
                  <Button submit disabled={!formState.isValid}>
                     Save
                  </Button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default CreateBlogPost;
