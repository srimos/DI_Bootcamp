-- 1. Get a list of all the languages, from the language table.
select * from language;

-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select film.title, film.description, language.name as language_name from film inner join language on film.language_id=language.language_id order by film.title asc;

-- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select film.title, film.description, language.name as language_name from film right join language on film.language_id=language.language_id order by film.title asc;

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film (
new_film_id serial primary key,
new_film_name varchar (50) not null
);

insert into new_film (new_film_id, new_film_name)
values (1,'One More Time'),
(2,'It Takes Two to Tango'),
(3,'Three Blind Mice'),
(4,'Fantastic Four');

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
create table customer_review (
review_id serial primary key not null,
film_id smallint not null references new_film (new_film_id) on delete cascade,          
language_id smallint not null,
title varchar (50) not null,
score smallint not null,
review_text text,
last_update date
);

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
insert into customer_review (review_id,film_id,language_id,title,score,review_text,last_update)
values (1,1,1,'Would Definitely Watch One More Time!',9,'This movie was one of the best I have ever seen!',current_date),
(2,4,1,'Fantastic!',8,'Finally, a good Fantastic Four movie!',current_date);

-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?
delete from new_film where new_film_id=4;

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
update film set language_id=2 where title ilike '%italian%';

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
store_id and address_id;

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
drop table customer_review;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select count(*) from rental where return_date is null;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select film.title, film.rental_rate
from rental
inner join inventory on rental.inventory_id = inventory.inventory_id
inner join film on inventory.film_id = film.film_id
where return_date is null 
order by rental_rate desc
limit 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select film.title, film.description, actor.first_name, actor.last_name 
from film 
inner join film_actor on film_actor.film_id = film.film_id
inner join actor on actor.actor_id = film_actor.actor_id
where description ilike '%sumo%' and first_name='Penelope' and last_name='Monroe';

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select film.title, category.name, film.length, film.rating
from film 
inner join film_category on film_category.film_id = film.film_id
inner join category on film_category.category_id = category.category_id
where category.name ilike '%documentary%' and length < 60 and rating = 'R';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
select film.title, customer.first_name, customer.last_name, film.rental_rate, return_date
from film
inner join inventory on film.film_id = inventory.film_id
inner join rental on inventory.inventory_id = rental.inventory_id
inner join customer on rental.customer_id = customer.customer_id
where first_name = 'Matthew' and last_name = 'Mahan' and rental_rate > 4.00 and return_date between '2005-07-28' and '2005-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
select film.title, customer.first_name, customer.last_name, film.description, film.replacement_cost
from film
inner join inventory on film.film_id = inventory.film_id
inner join rental on inventory.inventory_id = rental.inventory_id
inner join customer on rental.customer_id = customer.customer_id
where (first_name = 'Matthew' and last_name = 'Mahan' and title ilike '%boat%') 
or (first_name = 'Matthew' and last_name = 'Mahan' and description ilike '%boat%') 
order by film.replacement_cost desc
limit 1;