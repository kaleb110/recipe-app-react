/* eslint-disable react/prop-types */
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const SingleMeal = ({ meal, handleBtnClick }) => {
  const { mealId } = useParams()
  return (
    <div className="sm:px-8 py-4 flex flex-col gap-4">
      <Header handleBtnClick={handleBtnClick} />
      {meal.map((i) =>
        i.meals
          .filter((filteredMeal) => filteredMeal.idMeal === mealId)
          .map((mealItem) => (
            <div
              key={mealItem.idMeal === mealId}
              className="flex flex-col items-start sm:px-16 lg:px-48"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 py-4">
                {mealItem.strMeal}
              </h1>
              <div>
                <img
                  src={mealItem.strMealThumb}
                  alt={mealItem.strMeal}
                  className="rounded-t-lg w-full min-h-10 object-cover"
                />
              </div>
              <div className="flex flex-col py-4 w-full shadow-lg rounded-b-xl px-6 gap-4">
                <div className="flex justify-between flex-wrap py-2">
                  <div className="flex gap-2">
                    <span className="text-md text-slate-800 font-semibold">
                      Categories:
                    </span>
                    <span className="text-slate-700">
                      {mealItem.strCategory}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-md text-slate-800 font-semibold">
                      Area:
                    </span>
                    <span className="text-slate-700">{mealItem.strArea}</span>
                  </div>
                </div>
                <p className="text-base text-wrap break-words w-full leading-2 pb-4">
                  {mealItem.strInstructions}
                </p>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default SingleMeal;
