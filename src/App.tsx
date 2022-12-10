import Header from "./components/Header";
import Home from "./sections/home/Home";
import AboutMe from "./sections/home/aboutMe/AboutMe";
import Skills from "./sections/home/skills/Skills";
import Projects from "./sections/home/projects/Projects";
import Timeline from "./sections/home/timeline/Timeline";
import Footer from "./components/Footer";
import Mouse from "./components/Mouse";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Timeline />
      <Header />
      <Footer />
      <Mouse />
    </>
  );
};

export default App;
