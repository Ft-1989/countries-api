import React from "react";
import Filter from "./components/Filter";
import Head from "./components/Head"
import Cards from "./components/Cards";
import CountryDetails from "./components/CountryDetails";
import Data from "./data";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const[data, setData] = React.useState(Data);
  const[darkMode, setDarkMode] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");
  const[choice, setChoice] = React.useState(null);

  React.useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
    document.body.classList.toggle('light-theme', !darkMode);
  }, [darkMode]);

  const changeTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());  
  };  

  return ( 
    <Router>
      <div className="App">
        <Head changeTheme={changeTheme} darkMode={darkMode}/>
        <main>
          <Routes>
            <Route
              path="/countries-api"
              element={
                <>
                  <Filter
                    darkMode={darkMode}
                    handleChange={handleChange}
                    searchInput={searchInput}
                    setChoice={setChoice}
                    choice={choice}
                  />
                  <Cards data={data} searchInput={searchInput} choice={choice} />
                </>
              }
            />
            <Route path="/country/:name" element={<CountryDetails data={data} darkMode={darkMode}/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
