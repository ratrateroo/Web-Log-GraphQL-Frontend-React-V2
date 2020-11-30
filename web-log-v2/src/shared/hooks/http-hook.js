import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState();
   const [loadedUsers, setLoadedUsers] = useState();

   //use useRef to handle data that wont change if this function runs again
   //to store data across rerender cycle like changing page
   //just before the http request is done
   const activeHttpRequests = useRef([]);

   //use useCallback to prevent recreation of this function
   //when the component rerenders
   //"to prevent infinite loop"
   const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
         const response = await fetch(url, {
            method,
            body,
            headers,
            signal: httpAbortCtrl.signal,
         });

         const responseData = await response.json();

         if (!response.ok) {
            throw new Error(responseData.message);
         }
         setIsLoading(false);
         return responseData;
      } catch (err) {
         setError(err.message);
         setIsLoading(false);
         //throw error to let the component know something went wrong
         throw err;
      }
   }, []);

   const clearError = () => {
      setError(null);
   };

   //useEffect
   //1. run logic when component rerenders
   //2. run login when component unmounts

   //run clean up logic
   useEffect(() => {
      return () => {
         activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
      };
   }, []);

   return { isLoading, error, sendRequest, clearError };
};
