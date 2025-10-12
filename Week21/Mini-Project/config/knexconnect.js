import knex from "knex"
const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'c-files',
        password: '',
        database: 'workout',
        port: 5432
    }
});

export {db}