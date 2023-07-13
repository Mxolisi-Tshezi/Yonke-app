import "./App.css";
import "./Marketplace.css";
import "./Stores.css"
import "./Services.css"



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Services from "./pages/Services";
import Stores from "./pages/Stores";
import Groceries from "./pages/Groceries";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/grocery" element={<Groceries />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;