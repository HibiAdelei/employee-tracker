USE employees_DB;

-- depts
INSERT INTO department (name)
VALUES ("Development");

INSERT INTO department (name)
VALUES ("Marketing");

INSERT INTO department (name)
VALUES ("Legal");

--roles 
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 40, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Engineering Lead", 150000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Backend Software Dev", 60000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Social Media Manager", 1250000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("The Only Lawyer", 25000000, 3);

-- employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lilain", "Adelei", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hibi", "Adelei", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Addy", "Hibi", 3, null);
