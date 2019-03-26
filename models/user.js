// Bring in the database connection
const db = require('./conn');

// Need a User...object? thing? something?
class User {

    // "static" means that the function is something 
    // the class can do, but an instance cannot.
    static getById(id) {
        return db.any(`select * from users where id=${id}`);
    }

}

// Export my User model
module.exports = User;