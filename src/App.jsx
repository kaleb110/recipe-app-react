import Home from "./components/Home";
import Alphabet from "./components/Alphabet";
import AlphabetLetter from "./components/AlphabetLetter";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [query, setquery] = useState("");
  const [meal, setmeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, seturl] = useState(
    "http://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await fetch(url);
      const data = await result.json();
      setmeal(() => {
        return [data.meals ? data : []];
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const handleClick = () => {
    seturl(`http://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  };

  const truncateText = (text, size) => {
    if (text.length > size) return text.substring(0, size);
  };

  //
  const handleBtnClick = (e, letter) => {
    const targetClass = e.target.className;
    let newUrl = "";
    if (targetClass === "search") {
      newUrl = `http://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    } else if (targetClass === "home") {
      newUrl = "http://www.themealdb.com/api/json/v1/1/search.php?s=";
    } else if (targetClass === "alphabet") {
      newUrl = "http://www.themealdb.com/api/json/v1/1/search.php?s=";
    } else {
      newUrl = `http://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    }
    seturl(newUrl);
    // fetchData();
  };

  // const handleLetterClick = (e) => {
  //   const targetLetter = e.target.value;
  //   seturl(`www.themealdb.com/api/json/v1/1/search.php?f=${targetLetter}`);
  // };

  return (
    <div className="flex flex-col gap-3 py-8 px-4 bg-slate-100 min-h-screen">
      <Router>
        <header>
          <nav>
            <div className="">
              <ul className="justify-between flex sm:px-4">
                <Link
                  to="/"
                  onClick={(e) => handleBtnClick(e)}
                  className="home"
                >
                  <li className="text-slate-700 font-bold hover:cursor-pointer hover:text-slate-500 leading-1 max-sm:text-sm">
                    Home
                  </li>
                </Link>
                <div className="flex gap-4">
                  <Link
                    to="/search"
                    onClick={(e) => handleBtnClick(e)}
                    className="search"
                  >
                    <li className="text-slate-700 font-bold hover:cursor-pointer hover:text-slate-500 leading-1 max-sm:text-sm">
                      Search
                    </li>
                  </Link>
                  <Link
                    to="/alphabet"
                    onClick={(e) => handleBtnClick(e)}
                    className="alphabet"
                  >
                    <li className="text-slate-600 font-bold hover:cursor-pointer hover:text-slate-500 leading-1 max-sm:text-sm">
                      Alphabet
                    </li>
                  </Link>
                </div>
              </ul>
            </div>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={<Home meal={meal} truncateText={truncateText} />}
          />
          <Route
            path="/search"
            element={
              <Search
                setquery={setquery}
                handleClick={handleClick}
                isLoading={isLoading}
                meal={meal}
                truncateText={truncateText}
              />
            }
          ></Route>
          <Route
            path="/alphabet"
            element={
              <Alphabet
                meal={meal}
                truncateText={truncateText}
                onClick={handleBtnClick}
              />
            }
          >
            <Route
              path=":letter"
              element={
                <AlphabetLetter meal={meal} truncateText={truncateText} />
              }
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
