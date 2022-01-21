import "./App.css";
import Header from "./components/Header/Header";
import Sliderimages from "./components/Sliderimages";
import CardsSlider from "./components/CardsSlider";
import Premieres from "./components/Premieres";
import Footer from "./components/Footer/Footer";

// import {
//   BrowserRouter as Router,
//   Route
//   // ,Link
// } from "react-router-dom";

function App() {
  return(
    // <Router>
      <div>
        <Header/>
        {/* <Route path="/">
          <Route path="/movies">
            <AllMovies/> 
            <Premieres/>
          </Route> 
          <Route path="/">*/}
            <br/><br/>
            <Sliderimages/>
            <br/>
            <CardsSlider/>
            <Premieres/>
            <br/><br/><br/>
          {/* </Route>
        </Route> */}
        <Footer/>
      </div>
    // </Router>
  );
}

export default App;
