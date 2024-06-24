/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";

const Alphabet = ({ onClick }) => {
  function generateAlphabet() {
    const alphabet = [];
    for (let i = 65; i <= 90; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
  }

  const letters = generateAlphabet();

  return (
    <div className="sm:px-8 py-4 flex flex-col gap-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-lime-600">
        Search by letter
      </h1>

      <div className="flex justify-center">
        <ul className="flex gap-3 flex-wrap w-full justify-center ">
          {letters.map((letter) => (
            <li
              key={letter}
              className=" font-normal text-slate-600 transition-transform hover:scale-150"
            >
              <Link
                className={letter}
                onClick={(e) => onClick(e, letter)}
                to={`/alphabet/${letter}`}
              >
                {letter}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <pre className="text-wrap text-center text-base w-[80%]">
        {isLoading && "Loading..."}
      </pre> */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {/* {meal && meal.length > 0
          ? meal.map((m, index) => (
              <div key={index}>
                <h3>{truncateText(m.meals[0].strMeal, 20)}</h3>
                <p>{truncateText(m.meals[0].strInstructions, 100)}</p>
              </div>
            ))
          : "Opps...no meal"} */}

        {/* {meal.length > 0 && meal[0].meals
          ? meal[0].meals.map((m, index) => (
              <div key={index}>
                <h3>{truncateText(m.strMeal, 20)}</h3>
                <p>{truncateText(m.strInstructions, 100)}</p>
              </div>
            ))
          : "Opps...no meal"} */}
      </div>
      <div >
        <Outlet />
      </div>
    </div>
  );
};

export default Alphabet;
