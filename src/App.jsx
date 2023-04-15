import { useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomLocation from "./utils/getRandomLocation";
import MainContent from "./components/MainContent";
import getAllLocations from "./utils/getAllLocations";

function App() {
  const [inputValue, setInputValue] = useState(getRandomLocation());
  const inputLocation = useRef();
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, hasError] = useFetch(url);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputLocation.current.value);
  };
  /*   const sugest = getAllLocations();
  console.log(sugest); */
  return (
    <div className="App">
      <img className="app__title" src="/rick.JPG" alt="" />
      <form onSubmit={handleSubmit} className="app__form">
        <input type="number" className="app__input" ref={inputLocation} />
        <button className="app__btn">Search</button>
      </form>

      {hasError ? (
        <h2>✖ Hey! you mus provide an ide from 1 to 126</h2>
      ) : (
        <MainContent location={location} />
      )}
    </div>
  );
}

export default App;
