const sqlite3 = require('sqlite3').verbose();
const tableCreated = true;
const initCompleted = true;


const insertAccount = (firstName, lastName, email) => {
    db.run('INSERT INTO Account (FirstName, LastName, EmailAddress) VALUES(?, ?, ?)', [firstName, lastName, email], (err) => {
        if (err) {
            return console.error('INSERT Failed: ' + err.message);
        }

        console.log('Insert Completed');
    });
}

let db = new sqlite3.Database('./db/crm1.db', (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Successfully connected to the crm1 database.');
});

if (!tableCreated) {
    db.run('CREATE TABLE Account (FirstName text, LastName text, EmailAddress text)');
}

if (!initCompleted) {
    insertAccount('Dean', 'Anips', 'danips@nowhere.net');
}

insertAccount('Sheldob', 'Miller', 'sheldon@nowhere.net');

db.all('SELECT FirstName, LastName, EmailAddress FROM Account', (err, result) => {
    if (err) {
        return console.error('SELECTION Error: ' + err.message);
    }
    console.log(result);
})

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Succesfully closed the crm1 database');
});

