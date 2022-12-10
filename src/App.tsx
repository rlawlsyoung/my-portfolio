import Header from "./components/Header";
import Home from "./sections/home/Home";
import AboutMe from "./sections/aboutMe/AboutMe";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Timeline from "./sections/timeline/Timeline";
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
