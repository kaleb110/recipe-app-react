import Home from "./routes/Home";
import Alphabet from "./routes/Alphabet";
import AlphabetLetter from "./routes/AlphabetLetter";
import Search from "./routes/Search";
import ErrorPage from "./components/ErrorPage";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    const targetId = e.target.id;
    let newUrl = "";
    if (targetId === "search") {
      newUrl = `http://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    } else if (targetId === "home") {
      newUrl = "http://www.themealdb.com/api/json/v1/1/search.php?s=";
    } else if (targetId === "alphabet") {
      newUrl = "http://www.themealdb.com/api/json/v1/1/search.php?s=";
    } else {
      newUrl = `http://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    }
    seturl(newUrl);
    // fetchData();
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: (
          <Home
            handleBtnClick={handleBtnClick}
            meal={meal}
            truncateText={truncateText}
          />
        ),
      },
      {
        path: "/search",
        element: (
          <Search
            setquery={setquery}
            handleBtnClick={handleBtnClick}
            handleClick={handleClick}
            isLoading={isLoading}
            meal={meal}
            truncateText={truncateText}
          />
        ),
      },
      {
        path: "/alphabet",
        element: (
          <Alphabet
            meal={meal}
            handleBtnClick={handleBtnClick}
            truncateText={truncateText}
            onClick={handleBtnClick}
          />
        ),
        children: [
          {
            path: "/alphabet/:letter",
            element: <AlphabetLetter meal={meal} truncateText={truncateText} />,
          },
        ],
      },
    ],
    {
      basename: "/Recipe-app-react",
    }
  );

  return (
    <div className="flex flex-col gap-3 py-4 px-4 sm:px-12 bg-slate-100 min-h-screen">
      <RouterProvider router={router} />

      {/* {<Router basename="/Recipe-app-react">
        <header>
          <nav>
            <div className="sm:px-8">
              <ul className="justify-between flex ">
                <Link
                  to="/"
                  onClick={(e) => handleBtnClick(e)}
                  className="home"
                >
                  <li className="text-gray-500 font-bold hover:cursor-pointer hover:text-gray-600 leading-1 max-sm:text-[16px]">
                    Home
                  </li>
                </Link>
                <div className="flex gap-4">
                  <Link
                    to="/search"
                    onClick={(e) => handleBtnClick(e)}
                    className="search"
                  >
                    <li className="text-gray-500 font-bold hover:cursor-pointer hover:text-gray-600 leading-1 max-sm:text-[16px]">
                      Search
                    </li>
                  </Link>
                  <Link
                    to="/alphabet"
                    onClick={(e) => handleBtnClick(e)}
                    className="alphabet"
                  >
                    <li className="text-gray-500 font-bold hover:cursor-pointer hover:text-gray-600 leading-1 max-sm:text-[16px]">
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
           />
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
            />
          </Route>
        </Routes>
      </Router>} */}
    </div>
  );
}

export default App;
