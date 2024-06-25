/* eslint-disable react/prop-types */"react-router-dom"
import Meal from "../components/Meal";

const AlphabetLetter = ({meal, truncateText}) => {
  return (
    <div className="sm:px-8 py-4">
      <Meal meal={meal} truncateText={truncateText} />
    </div>
  );
}

export default AlphabetLetter