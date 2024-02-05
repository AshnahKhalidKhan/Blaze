import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AnotherPage from "./Components/AnotherPage/AnotherPage";
import Profile from "./Components/Profile/Profile";
import OurStory from "./Components/OurStory/OurStory";
import Login from "./Components/Login/Login";

function App() {
  return (
  <Routes>
    <Route path = "/" element = {<Home/>}></Route>
    <Route path = "/Profile" element = {<Profile/>}></Route>
    <Route path = "/OurStory" element = {<OurStory/>}></Route>
    <Route path = "/Login" element = {<Login/>}></Route>
    <Route path = "/AnotherPage" element = {<AnotherPage />}></Route>
  </Routes>
  )
}

export default App;
