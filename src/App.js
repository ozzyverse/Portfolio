import Home from "./components/Home";
import About from "./components/About";

import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks.1";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <diV>
      <NavBar />
      <Home />
      <About />
      <Portfolio />

      <Experience />
      <Contact />

      <SocialLinks />
    </diV>
  );
}

export default App;
