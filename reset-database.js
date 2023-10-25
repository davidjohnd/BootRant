import { pool } from "./index2.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS journal CASCADE;
    `);
    console.log("table dropped!")
  }
    catch (error) {
        console.error("Database reset failed: ", error);
      } finally {
        // End the pool
        await pool.end();
      }
  } 
  await resetDatabase();