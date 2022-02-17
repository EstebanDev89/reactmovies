import { useEffect, useState, useContext } from "react";
import { loadingContext } from "../contexts/LoadingContext";

export default function useLoadingFetch() {
    const [response, setResponse] = useState()
    const [{ url, method }, setRequest] = useState({});
    const {isLoading, setIsLoading} = useContext(loadingContext);
    const [isError, setIsError] = useState(false);

    const token = process.env.REACT_APP_MOVIE_PUBLIC_TOKEN;
    const isDev = process.env.REACT_APP_ENVIROMENT == 'DEV';

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {            
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(url,
                    {
                        method: method || 'GET',
                        headers: { authorization: `bearer ${token}` }
                    }).then(res => res.json());

                setResponse(result);
            } catch (error) {
                setIsError(true);
            }
            isDev && await (new Promise(resolve => setTimeout(resolve, 2000)));                
            setIsLoading(false);
        };

        fetchData();
    }, [url])

    return [{ response, isLoading, isError }, setRequest];
}