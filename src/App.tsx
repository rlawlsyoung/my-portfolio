import Header from "./components/Header";
import Home from "./sections/home/Home";
import AboutMe from "./sections/home/aboutMe/AboutMe";
import Skills from "./sections/home/skills/Skills";
import Projects from "./sections/home/projects/Projects";
import TimeLine from "./sections/home/timeLine/TimeLine";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <TimeLine />
      <Header />
      <Footer />
    </>
  );
};

export default App;
