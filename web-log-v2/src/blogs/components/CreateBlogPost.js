import React from 'react';

import './CreateBlogPost.css';

const CreateBlogPost = props => {
   return (
      <div className="c-form-blog">
         <form action="" className="c-form-blog__body">
            <div className="c-form-blog-input">
               <label className="c-form-blog-input__label" for="title">
                  Title
               </label>
               <input
                  className="c-form-blog-input__title"
                  type="text"
                  id="title"
                  name="title"
                  required
               />
            </div>

            <div className="c-form-blog-input">
               <label className="c-form-blog-input__label" for="content">
                  Content
               </label>
               <textarea
                  className="c-form-blog-input__content"
                  name="content"
                  id="content"
                  rows="13"
               ></textarea>
            </div>
            <div className="c-form-blog__button">
               <button type="submit" className="c-form-blog__button-save">
                  Save
               </button>
            </div>
         </form>
      </div>
   );
};

export default CreateBlogPost;
