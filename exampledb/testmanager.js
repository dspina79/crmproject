const manager = require('./manager');

console.log('Initializing DB');
initdb();
console.log('\n\n\n\nAdding Account');
addAccount("Dean", "Miller", "dean.miller@nowhere.net");
console.log('\n\n\n\nGetting Accounts');
console.log(getAccounts());