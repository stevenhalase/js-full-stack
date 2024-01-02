const { db } = require('@vercel/postgres');
const {
  todos
} = require('./placeholder-data');

async function seedTodos(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todo (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        date TIMESTAMP NOT NULL,
        complete BOOLEAN NOT NULL,
        description TEXT NOT NULL
      );
    `;

    console.log(`Created "todo" table`);

    const insertedTodos = await Promise.all(
      todos.map(
        (todo) => client.sql`
        INSERT INTO todo (id, date, complete, description)
        VALUES (${todo.id}, ${todo.date}, ${todo.complete}, ${todo.description})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedTodos.length} todos`);

    return {
      createTable,
      todo: insertedTodos,
    };
  } catch (error) {
    console.error('Error seeding todo:', error);
    throw error;
  }
}

async function deleteTodos(client) {
  try {
    const dropTable = await client.sql`
      DROP TABLE IF EXISTS todo
    `;

    console.log(`Deleted "todo" table`);

    return {
      dropTable
    };
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedTodos(client);
  // await deleteTodos(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
