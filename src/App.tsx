import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Header />
      <Footer />
    </>
  );
};

export default App;
