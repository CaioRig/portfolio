import GlobalStateContext from '../../global/GlobalStateContext';
import { useContext } from 'react';

export const Pokedex = () =>{
    const data = useContext(GlobalStateContext)
    console.log(data.selectedPokedex)
    return(
        <>{
            data.selectedPokedex.map((pkm)=>{
                return <p>{pkm.name}</p>
            })
            }</>
    )
}