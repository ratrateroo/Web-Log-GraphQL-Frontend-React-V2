import React from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

import QueryParams from '../components/QueryParams';
export default function QueryParamsExample() {
   return (
      <Router>
         <QueryParams />
      </Router>
   );
}
