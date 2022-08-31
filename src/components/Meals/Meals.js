import { Fragment } from "react/cjs/react.production.min";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import SampleForm from "./SampleForm";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
      {/* <SampleForm /> */}
    </Fragment>
  );
};

export default Meals;
