import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AboutMe from "./pages/home/aboutMe/AboutMe";
import Skills from "./pages/home/skills/Skills";
import Projects from "./pages/home/projects/Projects";
import Footer from "./components/footer/Footer";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Header />
      <Footer />
    </>
  );
};

export default App;
