USE CMS_DB;

INSERT INTO departments (name) 
VALUES ('Operations'), 
('Tap Room'), 
('Brewery'), 
('Sales');

INSERT INTO roles (title, salary, department_id) 
VALUES ('Owner', 60000, 1), 
('Director of Operations', 60000, 1), 
('Tap Room Manager', 60000.00, 2), 
('Lead Brewer', 60000.00, 3), 
('Sales Director', 60000.00, 4),  
('Tap Room Bartender', 45000.00, 2), 
('Brewer', 45000.00, 3), 
('Sales Rep', 45000.00, 4), 
('HR', 50000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Justin', 'Cox', 1, null),
('Corey', 'Poole', 2, 1),
('Blake', 'Peterson', 3, 1), 
('Dan', 'Villarubi', 4, 1), 
('Dusty', 'Poore', 5, 1),  
('El', 'Betts', 6, 3), 
('Austin', 'Liebrum', 7, 4), 
('Frankie', 'Quinton', 8, 5); 