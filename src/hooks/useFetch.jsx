import { useEffect, useState } from "react"

export const useFetch = (url, method = "GET") => {


    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);

    const postData = (formOptions) => {
        setOptions({
            
        })
    }

    useEffect(()=> {
        const fetchData = async () => {

            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                
            } catch (e) {
                console.log(e)
            }
        }
        if (method === "GET") {
            fetchData()
        }
        if (method === "POST") {

        }

    }, [url, method])
  
    return data
}
