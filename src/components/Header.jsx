/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Header = ({ handleBtnClick }) => {
  return (
    <header className="">
      <ul className="justify-between flex">
        <li className="text-gray-500 font-bold hover:cursor-pointer hover:text-gray-600 leading-1 max-sm:text-[16px]">
          <NavLink
            to="/"
            onClick={(e) => handleBtnClick(e)}
            className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            id="home"
          >
            Home
          </NavLink>
        </li>

        <div className="flex gap-4">
          <li className="text-gray-500 font-bold hover:cursor-pointer hover:text-gray-600 leading-1 max-sm:text-[16px]">
            <NavLink
              to="/search"
              onClick={(e) => handleBtnClick(e)}
              id="search"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              Search
            </NavLink>
          </li>

          <li className="text-gray-500 font-bold hover:cursor-pointer hover:text-gray-600 leading-1 max-sm:text-[16px]">
            <NavLink
              to="/alphabet"
              onClick={(e) => handleBtnClick(e)}
              id="alphabet"
              className={({ isActive }) => (isActive ? "text-orange-600" : "")}
            >
              Alphabet
            </NavLink>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Header;
