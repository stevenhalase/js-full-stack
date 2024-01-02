'use server'


import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { v4 } from 'uuid';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type State = {
  errors?: {
    description?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  complete: z.boolean(),
  description: z.string({
    invalid_type_error: 'Please enter a description.',
  })
});

const CreateTodo = FormSchema.omit({ id: true, complete: true });

export async function createTodo(prevState: State, formData: FormData) {
  const validatedFields = CreateTodo.safeParse({
    description: formData.get('description')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Todo.',
    };
  }

  const { description } = validatedFields.data;
  const date = new Date().toISOString();

  try {
    await sql`
      INSERT INTO todo (id, date, complete, description)
      VALUES (${v4()}, ${date}, ${false}, ${description})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Todo.',
    };
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function updateTodo(
  id: string,
  complete: boolean
) {
  try {
    await sql`
      UPDATE todo
      SET complete = ${complete}
      WHERE id = ${id}
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Todo.',
    };
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function deleteTodo(id: string) {
  try {
    await sql`DELETE FROM todo WHERE id = ${id}`;
    revalidatePath('/dashboard');
    return { message: 'Deleted Todo.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Todo.' };
  }
}