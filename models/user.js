// Bring in the database connection
const db = require('./conn');
const Review = require('./reviews');
const Favorite = require('./favorites');
const bcrypt = require('bcryptjs');

// Need a User...object? thing? something?
class User {

    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.password = password;
    }

    // "static" means that the function is something 
    // the class can do, but an instance cannot.
    static getById(id) {
        // .any always returns an array
        // Instead, we'll use .one
        // return db.any(`select * from users where id=${id}`);
        return db.one(`select * from users where id=${id}`)
                    .then((userData) => {
                        const userInstance = new User(userData.id, userData.first_name, userData.last_name, userData.email, userData.password);
                        return userInstance;
                    })
                    .catch(() => {
                        return null;
                    })
    }

    // no 'static' since this is an instance method
    // (it belongs to the individual instance)
    save() {
        // .result is used when you might want a report about how many rows 
        // got affected
        return db.result(`
            update users set
                first_name='${this.firstName}',
                last_name='${this.lastName}',
                email='${this.email}',
                password='${this.password}'
            where id=${this.id}
        `);
    }

    // get all reviews written by this user
    get reviews() {
        return db.any(`select * from reviews where user_id=${this.id}`)
            .then((arrayOfReviewData) => {
                // Equivalent to using .map (from reviews.js)
                const arrayOfReviewInstances = [];

                arrayOfReviewData.forEach((data) => {
                    const newInstance = new Review(
                        data.id,
                        data.score,
                        data.content,
                        data.restaurant_id,
                        data.user_id
                    );
                    arrayOfReviewInstances.push(newInstance);
                });



                return arrayOfReviewInstances;
            });
    }

    // get all favorites from this user
    getFavorites(){
        return db.any(`select * from favorites where user_id=${this.id}`)
            .then((arrayOfFavoriteData) => {
                const arrayOfFavoriteInstances = [];

                    arrayOfFavoriteData.forEach((data) => {
                        const newInstance = new Favorite(
                            data.id,
                            data.user_id,
                            data.restaurant_id
                        );
                        arrayOfFavoriteInstances.push(newInstance);
                    });
                return arrayOfFavoriteInstances;
            });
    }

    setPassword(newPassword){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }

    checkPassword(aPassword){
        const isCorrect = bcrypt.compareSync(aPassword, this.password);
        return isCorrect;
    }
}

// User.getById(3)
//     .then((user) => {
//         console.log(user);
//     })

// Export my User model
module.exports = User;