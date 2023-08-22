import { SelectedPage } from "@/shared/Types";
import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import About from "@/scenes/about";
import Home from "@/scenes/home";
import LineGradient from "./shared/Linegradient";
import Projects from "@/scenes/Projects";
import Testimonial from "@/scenes/testmonial";
import Contact from "@/scenes/contact";
import FooterOne from "@/scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <LineGradient />
      <About />
      <LineGradient />
      <Projects />
      <Testimonial />
      <Contact />
      <FooterOne />
    </div>
  );
}

export default App;
