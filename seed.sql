USE CMS_DB;

INSERT INTO departments (name) 
VALUES ('Tap Room'), ('Brewery'), ('Sales'), ('Operations');

INSERT INTO roles (title, salary) 
VALUES ('Tap Room Manager', 60000.00), ('Lead Brewer', 60000.00), ('Sales Director', 60000.00), ('Director of Operations', 60000), ('Tap Room Bartender', 45000.00), ('Brewer', 45000.00), ('Sales Rep', 45000.00), ('HR', 45000);

INSERT INTO employees (first_name, last_name)
VALUES ('Blake', 'Peterson'), ('Dan', 'Villarubi'), ('Dusty', 'Poore'), ('Corey', 'Poole'), ('El', 'Betts'), ('Austin', 'Liebrum'), ('Frankie', 'Quinton'), ('Justin', 'Cox'); 