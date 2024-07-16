import { Route, Routes } from "react-router-dom";
import { Home, GroupsIndex, GroupDetails } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path="/groups/:id" element={<GroupDetails />} />
        <Route path='/groups' element={<GroupsIndex />} ></Route>
      </Routes>
      <Footer />
    </>  
  );
}

export default App;
