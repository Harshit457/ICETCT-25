import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from './Components/Spinner/Spinner.jsx';  
import Navbar from './Components/Navbar/Navbar.jsx';  

const Home = React.lazy(() => import("./pages/Home"));
const Registration = React.lazy(() => import("./pages/Registration"));
const Speaker = React.lazy(() => import("./pages/Speaker"));
const Submission = React.lazy(() => import("./pages/Submission"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Commities = React.lazy(() => import("./pages/Commities"));
const Accomodation = React.lazy(() => import("./pages/Accomodation"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Spinner />}> 
          <Navbar />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/commities" element={<Commities />} />
            <Route path="/accomodation" element={<Accomodation />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
