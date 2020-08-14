import React from 'react';

import './MainFooter.css';

const MainFooter = props => {
   return (
      <footer className="footer">
         <p>{props.children}</p>
      </footer>
   );
};

export default MainFooter;
