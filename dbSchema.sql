/* Drops the database if it exists */
DROP DATABASE IF EXISTS employee_tracker_DB;

/* Creates database employee_tracker_DB*/
CREATE database employee_tracker_DB;

USE employee_tracker_DB;
/* Creates tables departments, roles, and employee*/
CREATE TABLE departments (
	id int auto_increment,
    name varchar(30),
    primary key(id)
);

CREATE TABLE roles (
	id int auto_increment,
    title varchar(30),
    salary decimal(10,2),
    department_id int,
    primary key(id),
    foreign key(department_id) 
        references departments(id)
);

CREATE TABLE employee(
	id int auto_increment,
    first_name varchar(30),
    last_name varchar(30),
    roles_id int,
    manager_id int,
    primary key(id),
    foreign key(roles_id)    
        references roles(id),
    foreign key(manager_id) 
        references employee(id)
);