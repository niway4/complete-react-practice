// import React from "react";
// import { NavLink, Route } from "react-router-dom";
// import AllQuotes from "./AllQuotes";

// const Home = () => {
//   return (
//     <>
//       <div>this is Home page</div>
// <Route path="/" element={<AllQuotes/>} />
//     </>
//   );
// };

// export default Home;
// Filename: Pages/Home.js

import React from "react";
import './Home.css';
const Home = () => {
    return (
        <div className="Page">
            <h1>You are in the Home page!</h1>
            <h3>URL: localhost:3000/</h3>
        </div>
    );
};

export default Home;