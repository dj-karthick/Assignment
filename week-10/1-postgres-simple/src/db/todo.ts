import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    await client.connect();
    const insertTodo = `
    INSERT INTO todos(userId, title, description)
    VALUES $1, $2
    RETURNING *
    `;

    const userRes = await client.query(insertTodo, [userId, title, description]);
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    await client.connect();
    const query = `
    UPDATE todos
    SET done = true
    WHERE id = $1
    RETURNING *
    `;

    const res = await client.query(query, [todoId]);

}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    await client.connect();
    const query = `
    SELECT * FROM todos
    WHERE id = $1`;

    const res = await client.query(query, [userId]);
}