import React, { useEffect, useState } from 'react';

import BlogList from '../components/BlogList';
import MainBody from '../../shared/components/UIElements/MainBody';
import image from '../../Images/cove view.jpg';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useHttpClient } from '../../shared/hooks/http-hook';
const Blogs = props => {
   const [loadedBlogs, setLoadedBlogs] = useState();
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
   // const BLOGS = [
   //    {
   //       id: 'b1',
   //       image: image,
   //       title: 'The Throne of the Sphinx',
   //       author: 'Aurora Barnuts',
   //    },

   // ];

   useEffect(() => {
      const fetchBlogs = async () => {
         try {
            const responseData = await sendRequest(`http://localhost:5000/blogs/all`);
            setLoadedBlogs(responseData.blogs);
            console.log(responseData.blogs);
         } catch (err) {
            console.log(err);
         }
      };
      fetchBlogs();
   }, [sendRequest]);
   return (
      <MainBody title={props.title}>
         <ErrorModal error={error} onClear={clearError} />
         {isLoading && <LoadingSpinner />}
         {!isLoading && loadedBlogs && <BlogList items={loadedBlogs} />}
      </MainBody>
   );
};

export default Blogs;
