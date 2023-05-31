import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import SocialMediaHandlers from "./Components/SocialMediaHandlers";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<News />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>

        <Routes>
          <Route path="/welcome" element={<Welcome />} />
        </Routes>

        <Routes>
          <Route path="/socialmedia" element={<SocialMediaHandlers />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
