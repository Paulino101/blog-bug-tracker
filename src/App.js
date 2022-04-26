// Components
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationEntries from "./AuthenticationSection/Authentication";

// entries
const blogEntries = [
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
    body: "After making the inputs it was time to add functionality. I chose to use Firebase because I loved their documentation. Also there was a lot of support online if I ever got stuck on something(which I did, a lot). I spent a good week implementing the email sign in and an extra week implementing the google sign in. After implementing the sign in I also restyled the log in form a bit.",
    img: "www.placeholder.com",
    imgCaption: "caption about the image",
  },
  {
    title: "Reset",
    date: "April 26,2022",
    body: "So I restarted the whole project. Why? well I was following tutorials on react-router-dom too heavily. While the implementations worked I didnt understand them at all so I decided to start from scratch. I was able to get the login/register forms up in a couple of hours and the next couple of days were spent relearning Protected routes and useContext(). I think this paid off as now I have a better understanding of Protected routes and useContext which I wouldnt have if I just kept copying tutorials.",
    img: "",
    imgCaption: "",
  },
];

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/authentication"
          element={<AuthenticationEntries entries={blogEntries} />}
        />
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
