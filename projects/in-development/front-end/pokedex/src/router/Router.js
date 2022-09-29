import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Header from '../components/Header';
import { Home } from '../pages/home/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}