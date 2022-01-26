import { Route, Routes } from "react-router-dom";

import { NavBar } from "./Components/Organisms";
import { Home, Notes } from "./Pages";
import "./App.css";

const navBarLinks = [
  { to: "/", name: "Home" },
  { to: "/notes", name: "Notes" },
];

const navbarProps = {
  logo: "https://cdn-icons-png.flaticon.com/512/2913/2913104.png",
  headerTitle: "Post-A-Note",
  alt: "Post-A-Note-icon",
  links: navBarLinks,
};

function App() {
  return (
    <div className="App">
      <NavBar {...navbarProps} />
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
