const { db } = require('@vercel/postgres');
const {
  todos
} = require('./placeholder-data');

async function seedTodos(client) {
  try {
    // Create the "todo" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todo (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        complete BOOLEAN NOT NULL
        description TEXT NOT NULL
      );
    `;

    console.log(`Created "todo" table`);

    // Insert data into the "todo" table
    const insertedTodos = await Promise.all(
      todos.map(
        (todo) => client.sql`
        INSERT INTO todo (id, complete, description)
        VALUES (${todo.id}, ${todo.complete}, ${todo.description})
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

async function main() {
  const client = await db.connect();

  await seedTodos(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
