const db = require('./conn');

// 1. get all info for a user by id
function getUserById(theId){
    return db.any(`select * from users where id=${theId}`)
}
// getUserById(2).then(console.log);

// 1A. get only a few fields for public version
function getUserPublic(theId){
    return db.any(`select first_name from users where id=${theId}`)
}
// getUserPublic(2).then(console.log);

// 1B. get all fields for private version
function getUserPrivate(theId){
    return db.any(`select * from users where id=${theId}`)
}
// getUserPrivate(2).then(console.log);

// 2. get all favorites for a user by id
function getUserFavorites(theId){
    return db.any(`select user_id, restaurant_id,first_name from favorites f
	inner join users u on
		f.user_id = u.id
	where f.user_id=${theId};`)
}
getUserFavorites(1).then(console.log);