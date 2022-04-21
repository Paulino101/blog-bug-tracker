// Components
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthenticationEntries from "./AuthenticationSection/Authentication";
// entries
const authenticationEntries = [
  {
    title: "Making the UI",
    date: "April 20,2022",
    body: "Not much to talk about this part of authentication I made a simple form that has 2 inputs and a submit button.",
    img: "www.placeholder.com",
    imgCaption: "caption about the image",
  },
  {
    title: "Firebase",
    date: "April 20,2022",
    body: "After making the inputs it was time to add functionality. I chose to use Firebase because I loved their documentation. Also there was a lot of support online if I ever got stuck on something(which I did, a lot). I spent a good week implementing the email sign in and an extra week implementing the google sign in.",
    img: "www.placeholder.com",
    imgCaption: "caption about the image",
  },
];

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/authentication"
          element={<AuthenticationEntries entries={authenticationEntries} />}
        />
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
