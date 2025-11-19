import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fees from "./pages/Fees";
import Contact from "./pages/Contact";
import Paintings from "./pages/Paintings";
import Registry from "./pages/Registry";
import About from "./pages/About";
import More_Info from "./pages/More_Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/about" element={<About />} />
        <Route path="/more_info" element={<More_Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
