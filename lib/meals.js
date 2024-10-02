import sql from 'better-sqlite3';

// In here we write the code that reaches out to 
// the database and gets the data.
// Async/Await =              Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Establishing the connection to the database
const db = sql('meals.db');

export async function getMeals() {
    // Adds delay to simulate taking action a little longer
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // SQL code                      👇run when you change data && .all() to get all rows
    return db.prepare('SELECT * FROM meals').all();
    //                                    getting a single row ".get()"
}