import "./App.scss";
import "swiper/swiper.min.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RoutesComponent from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesComponent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
