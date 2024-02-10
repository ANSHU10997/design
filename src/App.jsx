import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";

function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <Hero />
      <Section />
    </div>
  );
}

export default App;
