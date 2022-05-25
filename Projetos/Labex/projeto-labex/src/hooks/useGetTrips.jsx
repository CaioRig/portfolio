import axios from "axios"
import { apiUrl, student } from "../App"
import { useState, useEffect } from "react"

const useGetTrips = () => {
    const [trips, setTrips] = useState([])

    useEffect(()=>{
            axios
                .get(`${apiUrl}${student}trips`)
                .then((res) => {
                    setTrips(res.data.trips)
                })
                .catch((e) => {
                    
                })
    }, [])
        
    return trips
}

export default useGetTrips;