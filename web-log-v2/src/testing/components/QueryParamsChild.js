import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

const QueryParamsChild = ({ name }) => {
   return (
      <div>
         {name ? (
            <h3>
               The <code>name</code> in the query string is &quot;{name}
               &quot;
            </h3>
         ) : (
            <h3>There is no name in the query string</h3>
         )}
      </div>
   );
};
export default QueryParamsChild;
