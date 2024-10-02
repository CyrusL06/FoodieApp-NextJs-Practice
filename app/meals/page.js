import Link from "next/link";

import styles from "./mealsPage.module.css";
import MealsGrid from "@/component/meals/mealsGrid";
import { getMeals } from "../../lib/meals";

// Async/Await =              Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

export default async function MealsPage() {
  // When it comes to load data we could 
  //On react we would normally use useEffect Tool and use fetch function 
  // to a back and reach the data from there

  //but since we have backend with nextJs we   dont need that.
  // To make it cleaner were gonna add components

  // And we can get back our meals here
  const meals = await getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe cook it yourself.</p>
        <p className={styles.cta}>
          <Link href="meals/share">Share Your Recipe</Link>
        </p>
      </header>

      <main className={styles.main}>
        {/* now we can use meals to parse it */}
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
