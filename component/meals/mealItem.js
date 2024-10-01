import styles from "./mealItem.module.css";
import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          {/* 
          You can use fill prop instead of setting dimensions 
          whenever u dont know the size */}
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          {/* 
          Link that takes us to specific
           this dynamic slug is the thing would be used 
            */}
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
