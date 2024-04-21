import { RecoilRoot } from "recoil";

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
    <RecoilRoot>
      <GlobalStyle />
      <Home />
      <AboutMe />
      <Timeline />
      <Skills />
      <Projects />
      <Header />
      <Footer />
      <Mouse />
    </RecoilRoot>
  );
};

export default App;
