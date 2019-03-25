select * from users;

insert into users
	(first_name, last_name, email, password)
values
	('Ashish', 'Garg', 'mragarg@gmail.com', 'dumbPASS'),
	('Chastity', 'Duhaney', 'chastity@duhaney.com', 'anotherPASS'),
	('Bill', 'Smith', 'smith@bill.com', 'stupidPASS'),
	('Tom', 'Ford', 'tom@ford.com', 'boujeePASS')
;

select * from restaurants;

insert into restaurants
	(name, address, street, state, phone, menu, picture)
values
	('Chipotle', '3242 Piedmont Rd., Atlanta, GA, 30350', '3242 Piedmont Rd.', 'Georgia', '404-000-0001', 'Chipotle Menu', 'Chipotle Pic'),
	('Jimmy Johns', '3200 Piedmont Rd., Atlanta, GA, 30350', '3200 Piedmont Rd.', 'Georgia', '404-000-0002', 'JJ Menu', 'JJ Pic'),
	('Chic-Fil-A', '1002 Bama Rd., Montgomery, AL, 20020', '1002 Bama Rd.', 'Alabama', '202-000-5555', 'Chic-Fil-A Menu', 'Chic-Fil-A Pic'),
	('Cru', '100 Avalon Way, Alpharetta, GA, 30004', '100 Avalon Way.', 'Georgia', '678-000-1111', 'Cru Menu', 'Cru Pic')
;

select * from favorites;

insert into favorites
	(user_id, restaurant_id)
values
	(1, 1),
	(1, 4),
	(1, 2),
	(2, 1),
	(2, 3)
;

select * from reviews;

insert into reviews
	(score, content, restaurant_id, user_id)
values
	(5, 'That vinegarette though', 1, 1),
	(4, 'Amazing service, but creepy smile', 3, 2),
	(3, 'Steak tough, not tender. WTF', 1, 2),
	(5, 'Good to get lit at', 4, 1)
;