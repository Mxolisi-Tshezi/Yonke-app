import "./App.css";
import "./Marketplace.css";
import "./Stores.css"
import "./Services.css"
// import "./Grocery.css"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Services from "./pages/Services";
import Stores from "./pages/Stores";
// import Grocery from "./pages/Grocery";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stores" element={<Stores />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;