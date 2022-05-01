import { useEffect,useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };
        fetchData();
    }, [url]);
    return { data, loading, error };
}

export default useFetch