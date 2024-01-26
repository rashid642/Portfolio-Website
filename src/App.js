
import { Achivements } from "./Components/Achivements";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import {VideoBackground} from "./Components/VideoBackground";

function App() {
  return (
    <div className="App">
        <VideoBackground />
        <Navbar/>
        <Home/>
        <Projects/>
        <Achivements/>
    </div>
  );
}

export default App;
