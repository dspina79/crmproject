export class Manager {
    sqlite3 = require('sqlite3').verbose();
    db = null;
    
    constructor() {
        db = new sqlite3.Database('./db/crm1.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Successfully connected to the crm1 database.');
        });
    }

    initdb() {
        this.db.run("DROP TABLE Order;DROP TABLE Account");
        this.db.run("CREATE TABLE Account (rowid, FirstName text, LastName text, EmailAddress text)")
        .run("CREATE TALBE Order (rowid, OrderDate date, Customer integer, FOREIGN KEY (Customer) REFERNCES Account(rowid)")
    }
}