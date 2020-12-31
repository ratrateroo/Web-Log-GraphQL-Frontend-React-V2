import React from 'react';

import CreateBlogPost from '../components/CreateBlogPost';
import MainBody from '../../shared/components/UIElements/MainBody';

const CreateBlog = props => {
   // const BLOGS = [
   //    {
   //       id: 'b1',
   //       image: 'https://source.unsplash.com/1600x900/?beach',
   //       title: 'The Throne of the Sphinx',
   //       author: 'Aurora Barnuts',
   //    },
   //
   // ];
   return (
      <MainBody title={props.title}>
         <CreateBlogPost />
      </MainBody>
   );
};

export default CreateBlog;
