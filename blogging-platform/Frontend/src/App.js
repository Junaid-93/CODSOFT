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
    <Route path="/" Component={LandingPage}>  </Route>
    <Route path="/dashboard" Component={DashboardPage}>  </Route>
    <Route path="/login" Component={LoginPage}></Route>
    <Route path="/register" Component={RegisterPage}></Route>
    <Route path="/blogs" Component={BlogsPage}></Route>
    <Route path="/write_now" Component={CreateBlogPage}></Route>
    <Route path="/profile" Component={ProfilePage}></Route>
    <Route path="/my_blogs" Component={MyBlogsPage}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
