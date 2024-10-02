// Error handling application
//this only shows where it is grouped at if its at root therefore it shows everywhere
'use client';

export default function Error({}){
    return <main className= "error">

                <h1>An error occured</h1>
                <p>Failed to fetch meal data</p>
            </main>
}