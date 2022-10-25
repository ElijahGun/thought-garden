import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }

  useEffect(() => {
    const fetchData = async (fetchOptions) => {
      try {
        const res = await fetch(url, { ...fetchOptions });
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.log(e);
      }
    };
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }
  }, [url, method, options]);

  return { data, postData };
};

// Issue is that we are setting the options in state but never calling fetchData() to make the post!
