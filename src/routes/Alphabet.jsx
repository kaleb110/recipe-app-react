/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const Alphabet = ({ onClick, handleBtnClick }) => {
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
      <Header handleBtnClick={handleBtnClick} />
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
                id={letter}
                onClick={(e) => onClick(e, letter)}
                to={`/alphabet/${letter}`}
              >
                {letter}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Alphabet;
