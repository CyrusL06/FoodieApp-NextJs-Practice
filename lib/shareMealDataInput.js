'use server'

import { redirect } from 'next/navigation';
// so how do we submit form? if we already are in the backend
  // this is what we do
  // now this is server action

  //why does is exist? 
  // you can take server action and assigned it for the action prop
  // now all of the data in form gathers in the object 
  //                        👇Form Data
  import {saveMeal} from './meals'

  //return
  function isInvalidText(text) {
    return !text || text.trim() === ''
  }

  export async function shareMeal( prevFormAction ,formData){

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
    };
    console.log(meal);



    //Server side validateion because 
    //people can take off the required from the client side
    //therefore u add one in the backend

    if (isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) || 
        isInvalidText(meal.creator_email) || 
        !meal.creator_email.includes('@') ||
        !meal.image || 
        meal.image.size === 0) 
        {
      // throw new Error ('INvalid input')
         //Handle error in elegant way
      return{
        message: 'Invalid input.'
        
      };
    }

    await saveMeal(meal);
    // revalidate cache for production & only that path
    revalidatePath('/meals');
    // redirect user to ./meals
    redirect('/meals')
  }