const db = require('./conn');

// 1. get all info for a user by id
function getUserById(theId){
    return db.any(`select * from users where id=${theId}`)
}
// getUserById(2).then(console.log);


//////////////////////////////////// ASYNC / AWAIT TESTING ////////////////////////////////////
async function getUserById2(theId){
    return await db.any(`select * from users where id=${theId}`)
}

// Async functions can use the keyword "await"
async function main(){
	// Async + Await
	const user3 = await getUserById2(3);	// "await" waits for promises 
											// it's like an implicit ".then"
	console.log(user3);

	// // Promise Method
	// getUserById(3)
	// 	.then(function (user3) {
	// 		console.log(user3);
	// 	});
}

// main();

async function main2() {
	const idArray = [1, 2, 3, 4];
	idArray.forEach(function (id) {
		const user = await getUserById2(id);
		console.log(user);
	});
}

main2();

////////////////////////////////////////////////////////////////////////////////////////////////

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
    return db.any(`select user_id, restaurant_id, first_name from favorites f
	inner join users u on
		f.user_id = u.id
	where f.user_id=${theId};`)
}
// getUserFavorites(1).then(console.log);

// 3. get all reviews written by that user by id
function getUserReviews(theId){
    return db.any(`select score, content, user_id, restaurant_id, first_name from reviews r
	inner join users u on
		r.user_id = u.id
	where r.user_id=${theId}`)
}
// getUserReviews(2).then(console.log);

