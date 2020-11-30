import { useState, useCallback, useRef } from React;

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState();

    //use useRef to handle data that wont change if this function runs again
    //to store data across rerender cycle like changing page
    //just before the http request is done
    const activeHttpRequests = useRef([]);


    
    const sendRequest = useCallback(
        async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true);
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);

        try {
            const response = await fetch(url, {
            method,
            body,
            headers
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message);
        }
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    },
    []);

    const clearError = () => {
        setError(null);
    }

    return { isLoading, error, sendRequest, clearError };

};