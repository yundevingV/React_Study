import { Route, Routes } from 'react-router-dom';
import About from './About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './Home';
import Profile from './pages/Profile';
import Layout from './pages/Layout';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />} >
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;