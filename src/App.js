import "./App.css";
import { Fragment } from "react";
import Top from "./pages/Manage Auth/components/header/top";
import Slider from "./pages/Manage Auth/components/body/Slider";
import N2 from "./pages/Manage Auth/components/header/N2";
import Frame4 from "./pages/Manage Auth/components/body/Frame4";
import Product from "./pages/Manage Auth/components/body/Product";
import Footer from "./pages/Manage Auth/components/footer/Footer";
function App() {
  return (
    <Fragment>
      <Top />
      <N2 />
      <Slider />
      <Frame4 />
      <Product />
      <Footer />
    </Fragment>
  );
}

export default App;
