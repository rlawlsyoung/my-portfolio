import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import GlobalStyle from "./styles/GlobalStyle";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Header />
    </>
  );
};

export default Router;
