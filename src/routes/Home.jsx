/* eslint-disable react/prop-types */
import Meal from "../components/Meal";
import Header from "../components/Header";

const Home = ({ meal, truncateText, handleBtnClick }) => {
  return (
    <div className="sm:px-8 py-4 flex flex-col gap-4">
      <Header handleBtnClick={handleBtnClick} />
      <h1 className="text-2xl sm:text-3xl font-bold text-lime-600">
        Meals App
      </h1>
      <Meal meal={meal} truncateText={truncateText} />
    </div>
  );
};

export default Home;
