import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const fetchData = async (url) => {
            await axios
                .get(url)
                .then((res) => {
                    setData(res.data)
                    setLoading(false)
                })
        }

        fetchData(url)
            .catch((err) => {
                alert(err)
            })
    }, [url])
    return [data, isLoading]
}

export default useRequestData;