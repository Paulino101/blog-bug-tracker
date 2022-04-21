// Components
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./AuthenticationSection/Authentication";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
