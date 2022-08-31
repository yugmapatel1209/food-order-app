import React, { useCallback, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [didLoad, setDidLoad] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback( async (requestConfig, applyData) => { //warped 
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ?requestConfig.method : 'GET' ,
        headers: requestConfig.headers ?requestConfig.headers : {},
        body: requestConfig.body? JSON.stringify(requestConfig.body): null,
      });

      if (!response.ok) {
        console.log('eeerrr', response);
        throw new Error("Request failed!");
      }

      const data = await response.json();
      console.log(data);
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
    setDidLoad(true);
  }, []);
  return {
    isLoading,
    error,
    didLoad,
    sendRequest,
  };
};

/* const useFetch = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback( async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ?requestConfig.method : 'GET' ,
        headers: requestConfig.headers ?requestConfig.headers : {},
        body: requestConfig.body? JSON.stringify(requestConfig.body): null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [requestConfig,applyData]);
  return {
    isLoading,
    error,
    sendRequest,
  };
};
 */
export default useFetch;
