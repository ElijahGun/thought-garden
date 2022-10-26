import { useEffect, useState } from "react"

export const useFetch = (url, method = 'GET') => {
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);

    const postData = (postData) => {
        setOptions({
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(postData)
        })
    }

    useEffect(()=>{
        
        const fetchData = async (fetchOptions) => {
            try {
                const res = await fetch(url, {...fetchOptions});
                const json = await res.json();
                setData(json);
                //TODO
            } catch (e) {
                console.log(e)
                //TODO - ERROR HANDLING
            }
        }
        if (method === 'GET') {
            fetchData();
        }
        if (method === 'POST' && options) {
            //TODO:: SET OPTIONS IN URL PARAM THEN FETCHDATA W OPTIONS
            fetchData(options)

        }
    },[url, method, options])

    return { data, postData }
}