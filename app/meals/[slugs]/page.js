//responsible for out putting the data within the db


import Image from "next/image";
import styles from "./slugs.module.css"
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
// we add params because it can take the concrete value at the end of url 
// because nextjs pass some special prop and every component will receive a sepcial parent props
export default function MealDetailsPage({params}) {
  // how do we acess to get the last url name? by addinf param props above
  // to get meals
  const meal = getMeal(params.slugs);
  // Creating line break
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>');

  // Closed evry render and pass error page
  if (!meal) {
    notFound();
  }

    return (
    <>
    <header className={styles.header}>
      <div className={styles.image}>
        <Image src={meal.image} alt={meal.title} fill/>
      </div>
      <div className={styles.headerText}>
        <h1>{meal.title}</h1>
        <p className={styles.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={styles.summary}>{meal.summary}</p>
      </div>


    </header>
    <main>
                       {/*becaise its dangerous when u dont validate it  */}
                       {/* but why do we need it? */}
                       {/*  */}
      <p className={styles.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}} ></p>
    </main>
    </>);
  }