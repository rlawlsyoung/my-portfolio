import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import GlobalStyle from "./styles/GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
