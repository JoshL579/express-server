var database = require('sqlite3').verbose();

const databaseUri = 'database.db';

const Users = new database.Database(databaseUri, (err) => {
    if (err) {
        console.log(err.message)
        throw err;
    }
    console.log('Connected to the SQLite database.');
    Users.run(`CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name STRING(64),
        email STRING(64),
        password STRING(64),
        register_time STRING(64),
        google_id STRING(64),
        access_token STRING(512),
        refresh_token STRING(512)
    )`,
        (err) => {
            if (err) {
                console.log('created already');
                return
            };
            console.log('created now');
            return
        }
    )
})

module.exports = { Users }