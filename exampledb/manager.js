const sqlite3 = require('sqlite3').verbose();
let db = null;
    
init = () => {
    db = new sqlite3.Database('./db/crm1.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Successfully connected to the crm1 database.');
    });
}

initdb = () => {
    db = new sqlite3.Database('./db/crm1.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Successfully connected to the crm1 database.');
    });

    db.run("DROP TABLE IF EXISTS [Orders]")
    .run("DROP TABLE IF EXISTS Account")
    .run("CREATE TABLE IF NOT EXISTS Account (rowid, FirstName text, LastName text, EmailAddress text)")
    .run("CREATE TABLE IF NOT EXISTS Orders (rowid, OrderDate date, Customer integer, FOREIGN KEY(Customer) REFERENCES Account(rowid))")
}

addAccount = (firstName, lastName, email) => {
    const sql = `INSERT INTO Account (FirstName, LastName, EmailAddress) VALUES ('${firstName}','${lastName}','${email}')`;

    new sqlite3.Database('./db/crm1.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Successfully connected to the crm1 database.');
    }).run(sql);
}

getAccounts = () => {
    console.log('Getting accounts');
    new sqlite3.Database('./db/crm1.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Successfully connected to the crm1 database.');
    }).get('SELECT * FROM Account', (error, result) => {
        if (error) {
            return console.error(error.message);
        }

        return result;
    });;
}