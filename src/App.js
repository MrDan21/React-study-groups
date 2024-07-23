import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home, GroupIndex, GroupCreate, EditGroup, Login } from './pages';
import { Header, Footer } from './components';

function App() {
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate('/login');
    }
  }, [navigate]);

  if (authenticated === null) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        {authenticated && (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/groups' element={<GroupIndex />} />
            <Route path='/groups/create' element={<GroupCreate />} />
            <Route path='/groups/edit' element={<EditGroup />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
