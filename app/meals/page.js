import Link from "next/link";
import styles from "./mealsPage.module.css";
import MealsGrid from "@/component/meals/mealsGrid.module.css";

export default function MealsPage() {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
