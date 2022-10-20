INSERT INTO department (name)
VALUES ("Food"),
       ("Drinks"),
       ("Shows");

INSERT INTO role (title, salary, department_id)
VALUES ("chef",50000, 1),
       ("Bar Tender", 65000, 2),
       ("actor", 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dave","Smith", 1, NULL),
       ("Nancy", "Anderson", 3, 1),
       ("Brandon", "Flower", 2, 2);