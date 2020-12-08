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
   const { isLoading, error, sendRequest, clearError } = useHttpClient();

   useEffect(() => {
      const fetchBlogById = async () => {
         try {
            const responseData = await sendRequest(`http://localhost:5000/blogs/user/${uid}`);
            setLoadedBlogs(responseData.blogs);
            console.log(responseData.blogs);
         } catch (err) {
            console.log(err);
         }
      };
      fetchBlogById();
   }, [sendRequest, uid]);

   console.log(loadedBlogs);

   const [showConfirmModal, setShowConfirmModal] = useState(false);

   const showDeleteWarningHandler = () => {
      setShowConfirmModal(true);
   };
   const cancelDeleteHandler = () => {
      setShowConfirmModal(false);
   };
   const headerNames = ['Blog No.', 'Title', 'Category', 'Created', 'Edited', 'Actions'];

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

                  <Button delete onClick={showDeleteWarningHandler}>
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
                  {/* {headerNames.map(headerName => {
                     return (
                        <div role="gridcell" className="c-blog-header__cell" key={headerName}>
                           {headerName}
                        </div>
                     );
                  })} */}

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
