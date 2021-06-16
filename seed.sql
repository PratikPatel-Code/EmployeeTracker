/* Targets employee_tracker-DB */
USE employee_tracker_DB;

/* Inserts into department table */
INSERT INTO departments (name) VALUES ("HR"), ("IT"), ("Accounting"), ("R&D");

/* Inserts HR roles into roles table */
INSERT INTO roles (title, salary, department_id) VALUES ("HR Manager", 90000, 01);
INSERT INTO roles (title, salary, department_id) VALUES ("HR Associate", 70000, 01);
/* Inserts IT roles into roles table */
INSERT INTO roles (title, salary, department_id) VALUES ("IT Manager", 95000, 02);
INSERT INTO roles (title, salary, department_id) VALUES ("IT Associate", 75000, 02);
/* Inserts Accounting roles into roles */
INSERT INTO roles (title, salary, department_id) VALUES ("Accounting Manager", 110000, 03);
INSERT INTO roles (title, salary, department_id) VALUES ("Accounting Clerk", 80000, 03);
/* Inserts R&D roles into roles */
INSERT INTO roles (title, salary, department_id) VALUES ("R&D Manager", 100000, 04);
INSERT INTO roles (title, salary, department_id) VALUES ("Tester", 65000, 04);

/* Inserts employees into employee */
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
("Bruce", "Wayne", 01, null),
("Dick", "Grayson", 05, 01),
("Barry", "Allen", 02, null),
("Wally", "West", 06, 02),
("Diana", "Prince", 03, null),
("Kara", "Danvers", 07, 03),
("Lois", "Lane", 04, null),
("Clark", "Kent", 08, 04);




