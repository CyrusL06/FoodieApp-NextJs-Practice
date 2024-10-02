import Link from "next/link";

import styles from "./mealsPage.module.css";
// The error was cased by this bruh
import MealsGrid from "@/component/meals/mealsGrid";
import { getMeals } from "../../lib/meals";
// Allows you to handle loading state or fallback until resource shows
import { Suspense } from "react";


// async when its server component
// seperated data fetching
async function Meals(){
  const meals = await getMeals();

  // Returns meals when the load is done
  return <MealsGrid meals={meals} />;


}
export default async function MealsPage() {

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
        {/* Suspense is */}
        {/* Write you want them to see while its loading */}
      <Suspense fallback={<p className={styles.loading}>Fetching Meals...</p>}>
        {/* Function get calls here */}
        <Meals/>
      </Suspense>
      </main>
    </>
  );
}
