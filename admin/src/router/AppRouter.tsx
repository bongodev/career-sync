import { Routes, Route } from 'react-router';
import App from '../App';
import Home from '@/pages/Home';
import Login from '@/pages/Login';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
