import React from 'react';

import BlogList from '../components/BlogList';
import MainBody from '../../shared/components/UIElements/MainBody';
const Blogs = () => {
   const BLOGS = [
      {
         id: 'b1',
         image: 'https://source.unsplash.com/1600x900/?beach',
         title: 'The Throne of the Sphinx',
         author: 'Aurora Barnuts',
      },
      {
         id: 'b2',
         image: 'https://source.unsplash.com/1600x900/?beach',
         title: 'Wizard of Oz',
         author: 'Aurora Barnuts',
      },
   ];
   return (
      <MainBody title={props.title}>
         <BlogList items={BLOGS} />
      </MainBody>
   );
};

export default Blogs;
