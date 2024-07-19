import { Route, Routes } from "react-router-dom";
import { Home, GroupIndex, GroupCreate, EditGroup, Login } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/groups' element={<GroupIndex />} ></Route>
        <Route path='/groups/create' element={<GroupCreate />} ></Route>
        <Route path='/groups/edit' element={<EditGroup />}/>
      </Routes>
      <Footer />
    </>  
  );
}

export default App;
