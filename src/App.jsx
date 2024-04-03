import Sidenav from "./components/Sidenav";
import Main from "./sections/Main";
import About from "./sections/About";
import Services from "./sections/Services.jsx";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Experience from "./sections/Experience.jsx";
import Testimonial from "./components/Testimonial.jsx";

function App() {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Services />
      <Projects />
      <Experience></Experience>
      <Testimonial></Testimonial>
      <Contact />
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}

export default App;
