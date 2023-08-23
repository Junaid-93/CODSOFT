import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';

import RegisterPage from './pages/register';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={LandingPage}>  </Route>
    <Route path="/dashboard" Component={DashboardPage}>  </Route>
    <Route path="/login" Component={LoginPage}></Route>
    <Route path="/register" Component={RegisterPage}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
