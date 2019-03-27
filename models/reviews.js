const db = require('./conn');
const Restaurant = require('./restaurants')

class Review {

    constructor(id, score, content, restaurant_id, user_id) {
        this.id = id;
        this.score = score;
        this.content = content;
        this.retaurantId = restaurant_id;
        this.userId = user_id;
    };

    // Gets a single review by ID
    static getById(id) {
        return db.one(`select * from reviews where id=${id}`)
            .then((reviewData) => {
                return new Review(
                    reviewData.id,
                    reviewData.score,
                    reviewData.content,
                    reviewData.restaurant_id,
                    reviewData.user_id
                );
            });
    }

    static getAllReviews(){
        return db.any('select * from reviews');
    }
}


module.exports = Review;