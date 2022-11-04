import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Header from '../components/Header';
import { Home } from '../pages/home/Home';
import { Details } from '../pages/details/Details';
import { Pokedex } from '../pages/pokedex/Pokedex';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/details/:name' element={<Details />} />
                <Route path='/pokedex' element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    )
}