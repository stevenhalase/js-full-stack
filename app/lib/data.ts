import { sql } from '@vercel/postgres';
import { Todo } from "./definitions";

export async function fetchTodos() {
  try {
    console.log('Fetching todo data...');

    const data = await sql<Todo>`SELECT * FROM todo`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch todo data.');
  }
}