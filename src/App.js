import "./assets/css/templatemo-sixteen.css";
import "./assets/css/fontawesome.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Footer from "./Components/footer";
import SingleProduct from "./Pages/SingleProduct";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/shop/single" component={SingleProduct}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
