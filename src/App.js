import { Route, Routes } from "react-router-dom";
import { Home, GroupsIndex } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/groups' element={<GroupsIndex />} ></Route>
      </Routes>
      <Footer />
    </>  
  );
}

export default App;
