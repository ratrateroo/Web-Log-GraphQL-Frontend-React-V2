import React from 'react';

import './MainBody.css';

const MainBody = props => {
   return (
      <main className="o-main-area">
         <section className="o-section-container">
            <div className="o-page-heading">
               <h1 className="c-page-heading">User Sign Up</h1>
            </div>

            <div class="o-page-body">{props.children}</div>
         </section>
      </main>
   );
};

export default MainBody;
