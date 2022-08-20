import About from "./components/About/About";
import Contact from "./components/Conatct/Contact";
import Intro from "./components/Introduction/Intro";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
