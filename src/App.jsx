import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Registration = React.lazy(() => import("./pages/Registration"));
const Speaker = React.lazy(() => import("./pages/Speaker"));
const Submission = React.lazy(() => import("./pages/Submission"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Commities = React.lazy(() => import("./pages/Commities"));
const Accomodation = React.lazy(() => import("./pages/Accomodation"));
const TechnicalCommities = React.lazy(() =>
  import("./pages/TechnicalCommities")
);
const OrganisingCommities = React.lazy(() =>
  import("./pages/OrganisingCommities")
);
function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/Registration"
              element={<Registration></Registration>}
            />
            <Route path="/Speaker" element={<Speaker></Speaker>}></Route>
            <Route
              path="/Submission"
              element={<Submission></Submission>}
            ></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Commities" element={<Commities></Commities>}></Route>
            <Route
              path="/Accomodation"
              element={<Accomodation></Accomodation>}
            ></Route>
            <Route
              path="/Organisingcommitie"
              element={<OrganisingCommities></OrganisingCommities>}
            ></Route>
            <Route
              path="/TechnicalCommitie"
              element={<Accomodation></Accomodation>}
            ></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
