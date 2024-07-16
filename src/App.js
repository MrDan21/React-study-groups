import { Route, Routes } from "react-router-dom";
import { Home, GroupsIndex, GroupsCreate } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/groups' element={<GroupsIndex />} ></Route>
        <Route path='/groups/create' element={<GroupsCreate />} ></Route>
      </Routes>
      <Footer />
    </>  
  );
}

export default App;
