import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

// In here we write the code that reaches out to 
// the database and gets the data.
// Async/Await =              Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Establishing the connection to the database
const db = sql('meals.db');

export async function getMeals() {
    // Adds delay to simulate taking action a little longer
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('Loading failed');
    // SQL code                      👇run when you change data && .all() to get all rows
    return db.prepare('SELECT * FROM meals').all();
    //                                    getting a single row ".get()"
}

// expect the slug{that idetifies which meal should be fetch}
export function getMeal(slug){
    // select all collums meals where slug is equal to this
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// dow
export function saveMeal(meal){
                //call slug and pass meal title and pass all case to lower
    meals.slug = slugify(meal.title, {lower: true})
    // sanitize this so were not vulnerabe for attack change and sabotages
    const instructions = xss(meal.instructions);
}