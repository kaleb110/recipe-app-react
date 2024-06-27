import Home from "./routes/Home";
import Alphabet from "./routes/Alphabet";
import AlphabetLetter from "./routes/AlphabetLetter";
import Search from "./routes/Search";
import ErrorPage from "./components/ErrorPage";
import SingleMeal from "./routes/SingleMeal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [query, setquery] = useState("");
  const [meal, setmeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, seturl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
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
    seturl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  };

  const truncateText = (text, size) => {
    if (text.length > size) return text.substring(0, size);
  };

  //
  const handleBtnClick = (e, letter) => {
    const targetId = e.target.id;
    let newUrl = "";
    if (targetId === "search") {
      newUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    } else if (targetId === "home") {
      newUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    } else if (targetId === "alphabet") {
      newUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    } else {
      newUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    }
    seturl(newUrl);
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
        path: "/meal/:mealId",
        element: <SingleMeal meal={meal} handleBtnClick={handleBtnClick} />,
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
    </div>
  );
}

export default App;
