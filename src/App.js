import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import "./styles/App.scss";
import "./styles/header.scss"
import "./styles/home.scss"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
