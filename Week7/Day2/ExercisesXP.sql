create table items(
id varchar (3) primary key,
name varchar (255),
price float
);

create table customers(
id varchar (3) primary key,
first_name varchar (255),
last_name varchar (255)
);

insert into items 
values('1','Small Desk',100),
('2','Large Desk',300),
('3','Fan',80)

insert into customers
values('1','Greg','Jones'),
('2','Sandra','Jones'),
('3','Scott','Scott'),
('4','Trevor','Green'),
('5','Melanie','Johnson')

select * from items

select * from items
where price > 80

select * from items
where price < 300

select * from customers
where last_name = 'Smith'

select * from customers
where last_name = 'Jones'

select * from customers
where first_name != 'Scott'

select * from items 
order by price asc

select * from items 
where price >= 80 order by price desc

select first_name,last_name from customers 
order by first_name asc limit 3 

select last_name from customers 
order by last_name desc