import { Route, Routes } from 'react-router-dom';
import Users from './component/Users'
import Navbar from './component/Navbar';
import UserCreate from './component/UserCreate'
import UserUpdate from './component/UserUpdate';
import Mail from './component/Mail';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="Create" element={<UserCreate />} />
        <Route path="Update/:id" element={<UserUpdate />} />
        <Route path="Mail" element={<Mail />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App