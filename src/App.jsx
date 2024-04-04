import "./App.css";
import Folder from "./components/Folder";
import Nav from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Folder />
      <SearchBar />
      <Cards />
      <Footer />
      <div className="search-form"></div>
    </div>
  );
}

export default App;
