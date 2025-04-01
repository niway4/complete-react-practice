// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import React from "react";
// import Home from "./pages/Home";
// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import Header from "./pages/Header";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/allquotes" element={<AllQuotes />} />
//         <Route path="/quotedetail" element={<QuoteDetail />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="courses">Courses</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
