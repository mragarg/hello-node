// Bring in the database connection
const db = require('./conn');

// Need a User...object? thing? something?
class User {

    constructor()
    
    // "static" means that the function is something 
    // the class can do, but an instance cannot.
    static getById(id) {
        // .any always returns an array
        // Instead, we'll use .one
        // return db.any(`select * from users where id=${id}`);
        return db.one(`select * from users where id=${id}`);
    }

}

User.getById(3)
    .then((user) => {
        console.log(user);
    })

// Export my User model
module.exports = User;