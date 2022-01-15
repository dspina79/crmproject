const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/crm1.db', (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Successfully connected to the crm1 database.');
});


db.run('CREATE TABLE Account (FirstName text, LastName text, EmailAddress text)')
    .run(`INSERT INTO Account VALUES ('Dean', 'Anips', 'danips@nowhere.net')`);



db.close((err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Succesfully closed the crm1 database');
});

