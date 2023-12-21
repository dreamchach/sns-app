import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Friends from './pages/Friends';
import Users from './pages/Users';
import KakaoCb from './pages/KakaoCb';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} errorElement={<NotFound />} />
        <Route path='/signup' element={<Signup />} errorElement={<NotFound />} />
        <Route path='/posts' element={<Posts />} errorElement={<NotFound />} />
        <Route path='/post' element={<Post />} errorElement={<NotFound />} />
        <Route path='/friend' element={<Friends />} errorElement={<NotFound />} />
        <Route path='/user' element={<Users />} errorElement={<NotFound />} />
        <Route path='/auth/kakao/callback' element={<KakaoCb />} errorElement={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
