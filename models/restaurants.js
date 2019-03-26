const db = require('./conn');

class Restaurant{

    static getAll(){
        // .any returns 0 or more results in an array
        // but that's async, so we 'return' the call to db.any
        return db.any('select * from restaurants');
    }

}

module.exports = Restaurant;