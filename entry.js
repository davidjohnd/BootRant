// Import the pool for the database
import {pool} from "./db/index.js";

//Get entry feature 

export async function getDate() {
// fetch entry from the journal table
const queryText = "SELECT * FROM Journal";

// use the pool to send to database
const result = await pool.query(queryText);

//return results
return result.rows;
}

// post entry feature
export async function createPost(post) {
    // Query the database to create a post and return the newly created post
    // Define the SQL query to create the post with mainEntry, date
    const queryText =
    "INSERT INTO Journal (mainEntry) VALUES ($1) RETURNING *";
    // Use the pool object to send the query to the database
  // passing the mainEntry as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [
    Journal.mainEntry
  ]);
 // The rows property of the result object contains the created entry
  // Display entry created
  return result.rows[0];
}
