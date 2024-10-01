import MealItem from "./mealItem";
import styles from "./mealsGrid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {/* Maps through all meal we can put it in a list item */}
      {meals.map((meal) => (
        <li key={meal.id}>
          {/* 
          Forward all the meal item property
          Pulls all the sat into the component
          */}
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
