'use client'

import classes from './page.module.css';
import ImagePicker from '@/component/meals/meals-picker/page';
// because we cant have use serve inside use client we import it from antoher page
import {shareMeal} from '@/lib/shareMealDataInput'
import MealsFormSubmit from './mealsFormSubmit'
// import { useActionState } from 'react';
import { useFormState } from 'react-dom';

export default function ShareMealPage() {
  // responsible for managing state of this component 
  // wich uses form that will submit with help of server side
 const [formAction, setformAction] = useFormState(shareMeal, {message: null});
  //it needs two argument ({serverAction}, {initialState}) what should be return before when no response is received


  

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* FORM */}
        {/* this is how we submit form */}
        <form className={classes.form} action={setformAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            {/* it gets this input tile */}
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
         <ImagePicker label="Your Image" name="image" />
         {formAction.message && <p>{formAction.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit/>
          </p>
        </form>

      </main>
    </>
  );
}