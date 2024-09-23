import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/about";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Navigate to={"/"} />}></Route>
          </Routes>
        </BrowserRouter>{" "}
      </>
    </div>
  );
}

export default App;
