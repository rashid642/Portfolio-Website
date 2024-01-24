
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import {VideoBackground} from "./Components/VideoBackground";

function App() {
  return (
    <div className="App">
      <VideoBackground />
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
