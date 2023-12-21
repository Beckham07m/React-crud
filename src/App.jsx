import { Route, Routes } from 'react-router-dom';
import Users from './component/Users'
import Navbar from './component/navbar'
import UserCreate from './component/UserCreate'
import UserUpdate from './component/UserUpdate';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Users />} />
        <Route path ="Create" element={<UserCreate />} />
        <Route path ="Update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App