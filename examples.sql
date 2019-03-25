-- load 4 to 5 things to each table
-- select * from users;

-- insert into users
-- 	(first_name, last_name, email, password)
-- values
-- 	('Ashish', 'Garg', 'mragarg@gmail.com', 'dumbPASS'),
-- 	('Chastity', 'Duhaney', 'chastity@duhaney.com', 'anotherPASS'),
-- 	('Bill', 'Smith', 'smith@bill.com', 'stupidPASS'),
-- 	('Tom', 'Ford', 'tom@ford.com', 'boujeePASS')
-- ;

-- select * from restaurants;

-- insert into restaurants
-- 	(name, address, street, state, phone, menu, picture)
-- values
-- 	('Chipotle', '3242 Piedmont Rd., Atlanta, GA, 30350', '3242 Piedmont Rd.', 'Georgia', '404-000-0001', 'Chipotle Menu', 'Chipotle Pic'),
-- 	('Jimmy Johns', '3200 Piedmont Rd., Atlanta, GA, 30350', '3200 Piedmont Rd.', 'Georgia', '404-000-0002', 'JJ Menu', 'JJ Pic'),
-- 	('Chic-Fil-A', '1002 Bama Rd., Montgomery, AL, 20020', '1002 Bama Rd.', 'Alabama', '202-000-5555', 'Chic-Fil-A Menu', 'Chic-Fil-A Pic'),
-- 	('Cru', '100 Avalon Way, Alpharetta, GA, 30004', '100 Avalon Way.', 'Georgia', '678-000-1111', 'Cru Menu', 'Cru Pic')
-- ;

-- select * from favorites;

-- insert into favorites
-- 	(user_id, restaurant_id)
-- values
-- 	(1, 1),
-- 	(1, 4),
-- 	(1, 2),
-- 	(2, 1),
-- 	(2, 3)
-- ;

-- select * from reviews;

-- insert into reviews
-- 	(score, content, restaurant_id, user_id)
-- values
-- 	(5, 'That vinegarette though', 1, 1),
-- 	(4, 'Amazing service, but creepy smile', 3, 2),
-- 	(3, 'Steak tough, not tender. WTF', 1, 2),
-- 	(5, 'Good to get lit at', 4, 1)
-- ;



-- user profile
-- 1. get all info for a user by id
select * from users where id=2;

    -- 1A. get only a few fields for public version
    select first_name from users where id=2;
    
    -- 1B. get all fields for private version
    select * from users where id=2;
    
-- 2. get all favorites for a user by id
select * from favorites f
	inner join users u on
		f.user_id = u.id
	where f.user_id=2;

-- 3. get all reviews written by that user by id
select score, content, user_id, restaurant_id from reviews r
	inner join users u on
		r.user_id = u.id
	where r.user_id=2;



-- restaurant profile
-- 1. get all info for a restaurant by id
select * from restaurants where id=4;

-- 2. get all reviews for restaurant by id
select * from restaurants
	inner join reviews on
		restaurants.id = reviews.restaurant_id
	where restaurants.id = 1;
	
select score, content from reviews
	inner join restaurants on
		reviews.restaurant_id = restaurants.id
	where reviews.restaurant_id = 1;

-- 3. get average review for the restaurant by id
select AVG(score) from reviews
	inner join restaurants on
		reviews.restaurant_id = restaurants.id
	where reviews.restaurant_id = 1;
	
-- 4. get count of favorites for a restaurant by id
select COUNT(*) from favorites 
	inner join restaurants on
		favorites.restaurant_id = restaurants.id
	where favorites.restaurant_id=1;




-- restaurant search result (restaurants in Atlanta, GA)
-- 1A. get all matching rows for restaurant by name (case insensitive search)
-- PRETEND USER PUTS 'c'
select name from restaurants
	where name ilike 'c%';

    -- 1B. include average review
    select AVG(score) from reviews
    	inner join restaurants on
    		restaurants.id = reviews.restaurant_id
    	where restaurants.id=1;
    
    -- 1C. include number of favorites
    select COUNT(*) from favorites
    	inner join restaurants on
    		restaurants.id = favorites.restaurant_id
    	where restaurants.id=1;
    
-- 2. limit by minimum review
select name, address from restaurants
	inner join reviews on
		reviews.restaurant_id = restaurants.id
	where reviews.score > 3;

-- 3. pagination
select name, address from restaurants LIMIT 2;