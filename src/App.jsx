import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import "./App.css";


// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route> */}
            <Navbar />
            <Home />
          {/* </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
