import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "ღომი",
    description: "მუს ჭკუმუნქ თეშ უჯგუშიშ",
    price: 22.99,
  },
  {
    id: "m2",
    name: "გებჟალია",
    description: "ღუმ დო გებჟალია ირფელს მისხუნ",
    price: 16.5,
  },
  {
    id: "m3",
    name: "კუჭმაჭი",
    description: "ასე მანგარ ოჭკუმალ ქუგოკოდა კუჭმაჭ ოკო იიდე",
    price: 12.99,
  },
  {
    id: "m4",
    name: "ელარჯი",
    description: "მარკატელ პადარკად ქოიღუდას",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
