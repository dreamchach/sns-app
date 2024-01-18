import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Users from './pages/Users';
import { addressHome, addressPosts, addressSignup } from './utill/constant/constant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={addressHome} element={<Login />} errorElement={<NotFound />} />
        <Route path={addressSignup} element={<Signup />} errorElement={<NotFound />} />
        <Route path={addressPosts} element={<Posts />} errorElement={<NotFound />} />
        <Route path='/post/:id' element={<Post />} errorElement={<NotFound />} />
        <Route path='/user/:id' element={<Users />} errorElement={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
