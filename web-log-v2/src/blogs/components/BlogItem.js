import React from 'react';

import './BlogItem.css';

const BlogItem = props => {
   return (
      <li class="o-blog-list__item">
         <div class="c-post">
            <div class="c-post__image">
               <img class="c-post__image-pic" src={props.image} alt={props.title} />
            </div>

            <div class="c-post__details">
               <h2 class="c-post__title">{props.title}</h2>
               <h3 class="c-post__author">{props.author}</h3>
            </div>
         </div>
      </li>
   );
};

export default BlogItem;
