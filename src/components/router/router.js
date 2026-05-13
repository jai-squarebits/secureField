import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../policys/about";
import Home from "../home";
import Terms from "../policys/terms";
import Privacy from "../policys/privacy";

export default function RouterLay() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriptions/" element={<About />} />
        <Route path="/terms/" element={<Terms />} />
        <Route path="/policy/" element={<Privacy />} />
      </Routes>
    </Router>
  );
}
