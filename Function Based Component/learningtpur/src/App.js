import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About"
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
        <BrowserRouter>
           
            <Routes>
              <Route path="/aboutus" element={<AboutUs />}/>
            </Routes>

            <Routes>
              <Route path="/home" element={<TextForm heading="Play With Wordsss & Itzz Characters..." />}/>
            </Routes>

            <Routes>
              <Route path="/about" element={<About/>}/>
            </Routes>
            
            <Routes>
              <Route path="/contact" element={<ContactUs/>}/>
            </Routes>

        </BrowserRouter>
     
    </>
  );
}

export default App;
