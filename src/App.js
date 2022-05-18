// Components
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationEntries from "./AuthenticationSection/Authentication";
import HomeStretch from "./HomeStretch";

// entries
const blogEntriesAuth = [
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
  {
    title: "Authetication Done",
    date: "April 28,2022",
    body: "authetication is done(except for google sign in on mobile). Not much to talk about really I just finished all the aforementioned items. Now onto C.R.U.D.",
  },
  {
    title: "Styled",
    date: "May 1, 2022",
    body: "Yo back to authetication type stuff since Im done with the basic crud implementation. Additionally finally got the issues to render dynamically with database changes. I just had to move the function outside the useEffect hook and it started working like a charm.",
  },
];

const homeStretchEntries = [
  {
    title: "Im Back",
    date: "May 18, 2022",
    body: "Its been a while since Ive updated this blog. While I was gone I made a ton of improvements. I added a landing page, updated styling for different viewports , added a dark mode, and also implemented filters to find a specific bug!.",
  },
];

const blogEntriesCrud = [
  {
    title: "C.R.U.D. create read update delete",
    date: "April 28, 2022",
    body: "Now that authetication is done I can work on implementing C.R.U.D.. Today I set up the Read part of it. I honestly could probably finish the full implementation of the C.R.U.D. functions. I didnt because I want to give each of the four operations at least a day a two to work on the look of the app.",
  },
  {
    title: " Change of Plans",
    date: "April 28,2022",
    body: "I am not gonna work component by component lol. I fully implemented crud. The big issues now is getting the page to render dynamically when i delete or update something in the database. From what I saw online i need to implement state into the functions so it re-renders. I originally thought of using useEffect() and putting a boolean in the params. This unfortunately caused an infinite loop so its back to the drawing board on that part of the app.",
  },
  {
    title: "Redirect !",
    date: "April 29,2022",
    body: "Still cant get the /create page to re render dynamically, I didnt want to spend too much time on it and get more frustrated. Instead I finally implemented redirect after login. It redireccts to the list of all issues so i styled them up a bit more. Working on this section has gave me the idea to filter issues on wether or not they have been solved. So back to youtube univiersity to see how to do that!",
  },
];
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/authentication"
          element={<AuthenticationEntries entries={blogEntriesAuth} />}
        />
        <Route
          path="/crud"
          element={<AuthenticationEntries entries={blogEntriesCrud} />}
        />
        <Route
          path="/homestretch"
          element={<AuthenticationEntries entries={homeStretchEntries} />}
        />
        <Route path="/" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
