import classes from './page.module.css';
import ImagePicker from '@/component/meals/meals-picker/page';


export default function ShareMealPage() {
  // so how do we submit form? if we already are in the backend
  // this is what we do
  // now this is server action

  //why does is exist? 
  // you can take server action and assigned it for the action prop
  // now all of the data in form gathers in the object 
  //                        👇Form Data
  async function shareMeal(formData){
    'use server';

    const meal = {
      // now in the form data object that
      // gets the value in the input field name
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
      // in order for this to work were suppose to pass the 
      //appropirate name in IMagepicker
    }
    console.log(meal);
  }

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
        <form className={classes.form} action={shareMeal}>
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
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}