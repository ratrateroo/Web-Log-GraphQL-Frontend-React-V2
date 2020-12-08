import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './UpdateBlogPost.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const UpdateBlogPost = () => {
   const auth = useContext(AuthContext);
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
   const [loadedBlog, setLoadedBlog] = useState();
   const blogId = useParams().bid;
   let history = useHistory();
   const [formState, inputHandler, setFormData] = useForm(
      {
         title: {
            value: '',
            isValid: false,
         },
         content: {
            value: '',
            isValid: false,
         },
         category: {
            value: '',
            isValid: false,
         },
         edited: {
            value: '',
            isValid: false,
         },
         created: {
            value: '',
            isValid: false,
         },
         author: {
            value: '',
            isValid: false,
         },
      },
      false
   );

   useEffect(() => {
      const fetchBlog = async () => {
         try {
            const responseData = await sendRequest(`http://localhost:5000/blogs/${blogId}`);
            setLoadedBlog(responseData.blog);

            setFormData(
               {
                  title: {
                     value: responseData.blog.title,
                     isValid: true,
                  },
                  content: {
                     value: responseData.blog.content,
                     isValid: true,
                  },

                  category: {
                     value: responseData.blog.category,
                     isValid: true,
                  },
                  edited: {
                     value: responseData.blog.edited,
                     isValid: true,
                  },
                  created: {
                     value: responseData.blog.created,
                     isValid: true,
                  },
                  author: {
                     value: responseData.blog.author,
                     isValid: true,
                  },
               },
               true
            );
         } catch (error) {
            console.log(error);
         }
      };
      fetchBlog();
   }, [sendRequest, blogId, setFormData]);

   const updateBlogHandler = async event => {
      event.preventDefault();
      console.log('/blogs/' + auth.userId);
      try {
         await sendRequest(
            `http://localhost:5000/blogs/${blogId}`,
            'PATCH',
            JSON.stringify({
               title: formState.inputs.title.value,
               content: formState.inputs.content.value,
               category: formState.inputs.category.value,
               edited: formState.inputs.edited.value,
               created: formState.inputs.created.value,
               author: formState.inputs.author.value,
            }),
            {
               'Content-Type': 'application/json',
            }
         );

         console.log('/blogs/' + auth.userId);
         history.push('/blogs/' + auth.userId);
      } catch (err) {
         console.log(err);
      }
   };

   if (isLoading) {
      return (
         <div>
            <LoadingSpinner />
         </div>
      );
   }

   if (!loadedBlog && !error) {
      return (
         <div>
            <h2>Could not find blog!</h2>
         </div>
      );
   }
   console.log(auth);
   return (
      <React.Fragment>
         <ErrorModal error={error} onClear={clearError} />
         {!isLoading && loadedBlog && (
            <div className="c-form-blog">
               <form onSubmit={updateBlogHandler} className="c-form-blog__body">
                  <Input
                     id="title"
                     element="input"
                     type="text"
                     label="Title"
                     validators={[VALIDATOR_REQUIRE()]}
                     errorText="Please enter a valid title."
                     onInput={inputHandler}
                     initialValue={loadedBlog.title}
                     initialValid={true}
                  />

                  <Input
                     id="content"
                     element="textarea"
                     label="Content"
                     validators={[VALIDATOR_MINLENGTH(5)]}
                     errorText="Please enter a valid content with a minimum of 5 characters"
                     onInput={inputHandler}
                     initialValue={loadedBlog.content}
                     initialValid={true}
                  />

                  <div className="c-form-blog__button">
                     <div className="c-form-blog__button-holder">
                        <Button submit disabled={!formState.isValid}>
                           Update
                        </Button>
                     </div>
                  </div>
               </form>
            </div>
         )}
      </React.Fragment>
   );
};

export default UpdateBlogPost;
