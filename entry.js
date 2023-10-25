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

