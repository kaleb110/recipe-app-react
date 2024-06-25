/* eslint-disable react/prop-types */
import Meal from "../components/Meal";
import Header from "../components/Header";

const Search = ({
  setquery,
  handleClick,
  meal,
  truncateText,
  handleBtnClick,
}) => {
  return (
    <div className="flex flex-col gap-2 sm:px-8 py-4">
      <Header handleBtnClick={handleBtnClick} />
      <h1 className="text-2xl sm:text-3xl font-bold text-lime-600">
        Search Meals
      </h1>
      <input
        type="text"
        placeholder="name"
        className="bg-gray-300 px-4 py-1 rounded-sm text-gray-600 focus:outline-gray-500 placeholder:text-gray-500"
        onChange={(e) => setquery(e.target.value)}
      />
      <div className="pb-4">
        <button
          className="bg-lime-300 rounded-md px-4 py-1 text-gray-600 hover:bg-lime-400"
          onClick={handleClick}
        >
          search
        </button>
      </div>
      <Meal meal={meal} truncateText={truncateText} />
    </div>
  );
};

export default Search;
