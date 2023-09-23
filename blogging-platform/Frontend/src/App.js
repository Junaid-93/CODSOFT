import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import BlogsPage from './pages/blogs';
import CreateBlogPage from './pages/createBlog';
import ProfilePage from './pages/profile';
import MyBlogsPage from './pages/My Blogs';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />}>  </Route>
    <Route path="/dashboard" element={<DashboardPage />}>  </Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
    <Route path="/blogs" element={<BlogsPage />}></Route>
    <Route path="/write_now" element={<CreateBlogPage />}></Route>
    <Route path="/profile" element={<ProfilePage />}></Route>
    <Route path="/my_blogs" element={<MyBlogsPage />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
