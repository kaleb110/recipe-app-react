/* eslint-disable react/prop-types */"react-router-dom"
const AlphabetLetter = ({meal, truncateText}) => {
  return (
    <div className="sm:px-8 py-4">
      <div className="flex flex-wrap justify-center gap-8 w-full transition-opacity ">
        {meal ? (
          meal.map((i) =>
            i.meals && i.meals.length > 0 ? (
              i.meals.map((mealItem) => (
                <div key={mealItem.idMeal} className="flex flex-col">
                  <img
                    src={mealItem.strMealThumb}
                    alt={mealItem.strMeal}
                    className="rounded-t-lg w-[300px] h-[200px] object-cover"
                  />
                  <div className="flex flex-col bg-white py-4 shadow-lg rounded-b-xl">
                    <p className="text-base text-wrap font-bold break-words max-w-[280px] px-2">
                      {mealItem.strMeal}
                    </p>

                    <p className="text-base text-wrap break-words max-w-[280px] leading-2 px-2">
                      {truncateText(mealItem.strInstructions, 70) + "..."}
                    </p>
                    <div className="flex justify-between pt-2 px-2">
                      <span className="text-slate-700">
                        {mealItem.strCategory}
                      </span>
                      <span className="text-slate-700">{mealItem.strArea}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p key={i.id}>Oops...no meal found</p>
            )
          )
        ) : (
          <p>Oops...no meal found</p>
        )}
      </div>
    </div>
  );
}

export default AlphabetLetter