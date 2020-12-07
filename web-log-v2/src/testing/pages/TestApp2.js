import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

const TestApp2 = props => {
   const [somevalue, setSomeValue] = useState(1000);
   console.log('Start Render');
   useEffect(() => {
      console.log('useEffect 1');
   }, []);
   useEffect(() => {
      console.log('useEffect 2');
      if (somevalue >= 5) {
         setSomeValue(0);
      }
      console.log('Inside useEffect');
   }, [somevalue]);
   //console.log('Outside useEffect value', somevalue);
   //    useEffect(() => {
   //       console.log('Inside useEffect 1');
   //       setSomeValue(1000);
   //       console.log('Inside useEffect 1 after changing value');
   //       console.log('useEffect 1 value', somevalue);
   //       return () => {
   //          console.log('Return useEffect 1');
   //       };
   //    }, []);

   /* useEffect(() => {
      const Testing = async () => {
         try {
            console.log('Inside useEffect 2');
            setSomeValue(2000);
         } catch (err) {
            console.log(err);
         }
      };
      Testing();
   }, []); */
   const onClickHandler = () => {
      setSomeValue(somevalue + 1);
   };
   console.log('End Render');
   return <h1 onClick={onClickHandler}>Testing {somevalue}</h1>;
};

export default TestApp2;
