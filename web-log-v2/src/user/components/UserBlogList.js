import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './UserBlogList.css';
import image from '../../Images/cove view.jpg';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import UserBlogItem from './UserBlogItem';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
const UserBlogList = props => {
   const auth = useContext(AuthContext);
   const { uid } = useParams();
   const BLOGS = [
      {
         id: 'b1',
         image: image,
         title: 'The Throne of the Sphinx',
         author: 'Aurora Barnuts',
         category: 'Javascript',
         created: 'Jan-14-12',
         updated: 'Jan-14-12',
      },
   ];
   console.log(uid);
   const [loadedBlogs, setLoadedBlogs] = useState([]);
   const [blogIdToDelete, setBlogIdToDelete] = useState();
   const { isLoading, error, sendRequest, clearError } = useHttpClient();

   useEffect(() => {
      const fetchBlogByUserId = async () => {
         try {
            const responseData = await sendRequest(`http://localhost:5000/blogs/user/${uid}`);
            setLoadedBlogs(responseData.blogs);
            console.log(responseData.blogs);
         } catch (err) {
            console.log(err);
         }
      };
      fetchBlogByUserId();
   }, [sendRequest, uid]);

   console.log(loadedBlogs);

   const [showConfirmModal, setShowConfirmModal] = useState(false);

   const blogDeletedHandler = deletedBlogId => {
      setLoadedPlace(prevBlogs => prevBlogs.filter(blog => blog.id !== deletedBlogId));
   };

   const showDeleteWarningHandler = () => {
      setShowConfirmModal(true);
   };
   const cancelDeleteHandler = () => {
      setShowConfirmModal(false);
   };

   const confirmDeleteHandler = async () => {
      setShowConfirmModal(false);
      try {
         await sendRequest(`http://localhost:5000/api/places/${props.id}`, 'DELETE');
         props.onDelete(props.id);
      } catch (err) {}
   };

   return (
      <React.Fragment>
         <Modal
            show={showConfirmModal}
            onCancel={cancelDeleteHandler}
            header="Confirm Delete"
            footer={
               <React.Fragment>
                  <Button cancel onClick={cancelDeleteHandler}>
                     Cancel
                  </Button>

                  <Button delete onClick={confirmDeleteHandler}>
                     Delete
                  </Button>
               </React.Fragment>
            }
         >
            <div>
               <h2>Modal</h2>
            </div>
         </Modal>
         <div className="c-blogs-list">
            <div role="grid" className="c-blogs-table">
               <div role="row" className="c-blogs-table__header">
                  <div role="gridcell" className="c-blog-header__cell">
                     Blog No.
                  </div>
                  <div role="gridcell" className="c-blog-header__cell">
                     Title
                  </div>
                  <div role="gridcell" className="c-blog-header__cell">
                     Category
                  </div>

                  <div role="gridcell" className="c-blog-header__cell">
                     Created
                  </div>
                  <div role="gridcell" className="c-blog-header__cell">
                     Edited
                  </div>

                  {auth.isLoggedIn && (
                     <div role="gridcell" className="c-blog-header__cell">
                        Actions
                     </div>
                  )}
               </div>

               <ul>
                  <ErrorModal error={error} onClear={clearError} />
                  {isLoading && <LoadingSpinner asOverlay />}
                  {loadedBlogs.map(blog => (
                     <UserBlogItem
                        key={blog.id}
                        id={blog.id} //
                        title={blog.title} //
                        author={blog.author} //
                        category={blog.category} //
                        created={blog.created} //
                        creator={blog.creator} //
                        content={blog.content} //
                        edited={blog.edited} //
                        comments={blog.comments} //
                        likes={blog.likes} //
                        onClick={showDeleteWarningHandler}
                        onDeleteBlog={blogDeletedHandler}
                        deleteBlogId={blogId => {
                           setBlogIdToDelete(blogId);
                        }}
                     />
                  ))}
               </ul>
            </div>
            <div className="c-form-button">
               <Button submit type="submit">
                  Create New
               </Button>
            </div>
         </div>
      </React.Fragment>
   );
};

export default UserBlogList;
