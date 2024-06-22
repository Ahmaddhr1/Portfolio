import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home id="#" />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </>
  );
}

export default App;
