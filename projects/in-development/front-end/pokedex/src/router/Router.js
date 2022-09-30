import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Header from '../components/Header';
import { Home } from '../pages/home/Home';
import { Details } from '../pages/details/Details';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/details/:name' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}