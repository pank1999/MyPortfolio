import { useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Conatct/Contact";
import Intro from "./components/Introduction/Intro";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { TheameContext } from "./context";


function App() {
  const theame=useContext(TheameContext);
  const darkMode=theame.state.darkMode;

  return (
    <div className="App" style={{backgroundColor:darkMode?"#222":"white",color:darkMode?"white":"black"}}>
     
         <Toggle />
         <Intro />
         <About />
         <ProductList />
         <Contact />
    
      
    </div>
  );
}

export default App;
