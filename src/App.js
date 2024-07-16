import { Route, Routes } from "react-router-dom";
import { Home, GroupsIndex } from "./pages";
import { Header, Footer } from "./components";
import { EditGroup } from "./pages/groups/EditGroup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<GroupsIndex />} />
        <Route path="/groups/editGroup" element={<EditGroup />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
