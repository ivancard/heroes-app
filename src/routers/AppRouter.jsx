import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { Navbar } from '../components/ui/NavBar';
import { DashboardRoutes } from '../routers/DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="*" element={<DashboardRoutes />} />
            </Routes>
        </Router>
    );
};
