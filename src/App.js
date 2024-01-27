
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import {VideoBackground} from "./Components/VideoBackground";
import "./CSS/scrollBar.css";

function App() {
  return (
    <div className="App">
        <VideoBackground />
        <Navbar/>
        <Home/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;
