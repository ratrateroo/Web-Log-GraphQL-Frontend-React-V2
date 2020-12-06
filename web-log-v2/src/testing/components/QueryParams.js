import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import QueryParamsChild from '../components/QueryParamsChild';

const useQuery = () => {
   return new URLSearchParams(useLocation().search);
};

const QueryParams = () => {
   const [locationName, setLocationName] = useState('none');

   let query = useQuery();

   useEffect(() => {
      setLocationName(query.get('name'));
   }, [query]);
   return (
      <div>
         <div>
            <h2>Accounts</h2>
            {locationName && <h3>This is our location: {locationName}</h3>}
            <ul>
               <li>
                  <Link to="/account?name=netflix">Netflix</Link>
               </li>
               <li>
                  <Link to="/account?name=zillow-group">Zillow Group</Link>
               </li>
               <li>
                  <Link to="/account?name=yahoo">Yahoo</Link>
               </li>
               <li>
                  <Link to="/account?name=modus-create">Modus Create</Link>
               </li>
            </ul>

            <QueryParamsChild name={query.get('name')} />
         </div>
      </div>
   );
};

export default QueryParams;
