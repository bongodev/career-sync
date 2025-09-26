import { Outlet } from 'react-router';
import './App.css';

function App() {
  return (
    <div>
      <header>This is header</header>
      <Outlet />
      <footer>This is footer</footer>
    </div>
  );
}

export default App;
