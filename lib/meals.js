import fs from 'node:fs'

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


export async function saveMeal(meal){
                //call slug and pass meal title and pass all case to lower
    meal.slug = slugify(meal.title, {lower: true})
    // sanitize this so were not vulnerabe for attack change and sabotages
    meal.instructions = xss(meal.instructions);


    const extention = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extention}`;


    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage),(error) => {
        if (error){
            throw new Error('Saving Image Failed')
        }
    });

    meal.image = `/images/${fileName}`

    //save in database
    db.prepare(`
        INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
         )
         `).run(meal)

}

//Server side validateion because 
//people can take off the required from the client side
//therefore u add one in the backend
