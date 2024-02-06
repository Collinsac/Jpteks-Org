import "./App.css";
import About from "./Components/About";
import Activities from "./Components/Activities";
import Choose from "./Components/Choose";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className=" bg-neutral-900">
      <div className=" min-h-screen flex flex-col">
        <Nav />
        <Header />
      </div>
      <About/>
      <Choose/>
      <Activities/>
      <Footer/>
    </div>
  );
}

export default App;
