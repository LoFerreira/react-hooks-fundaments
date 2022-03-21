import React from "react";

export const useFetch = (url, method = "get") => {
  const [response, setResponse] = React.useState({
    data: null,
    loading: true,
  });

  React.useEffect(() => {
    fetch(url, { method })
      .then((res) => res.json())
      .then((json) => setResponse({ data: json, loading: false }));
  }, [url, method]);

  return response;
};
