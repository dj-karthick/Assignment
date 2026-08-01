import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    await client.connect();
    const insertUserText = `
        INSERT INTO users(username, password, name)
        VALUES($1, $2, $3)
        RETURNING *;
    `;

    const userRes = await client.query( insertUserText, [username, password, name]);
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    await client.connect();
    const query = 'SELECT * FROM users WHERE id = $1';
    const value = userId;
    const result = await client.query(query, [value]);
}
