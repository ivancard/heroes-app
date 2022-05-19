import { Route, Routes, Navigate } from 'react-router-dom';

import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/hero/:heroId" element={<HeroScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="*" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    );
};
