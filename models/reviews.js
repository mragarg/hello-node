const db = require('./conn');

class Review {

    static getAllReviews(){
        return db.any('select * from reviews');
    }
}


module.exports = Review;