import { useParams } from "react-router-dom"

export const Details = () => {
    const pkmName = useParams()
    console.log(pkmName.name)
    return (
        <p>DETAILS</p>
    )
}