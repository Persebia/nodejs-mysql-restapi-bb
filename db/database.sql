CREATE DATABASE IF NOT EXISTS db_company_bb;
USE db_company_bb;

CREATE TABLE td_employee_bb (
    id_employee_bb INT PRIMARY KEY AUTO_INCREMENT,
    name_bb VARCHAR(45) DEFAULT NULL,
    salary_bb INT(5) DEFAULT NULL
);

DESCRIBE td_employee_bb;

INSERT INTO td_employee_bb VALUES
(1,'Barbara', 130),
(2,'Juan', 200),
(3,'Pedro', 85),
(4,'Daniel', 140),
(5,'Marina', 100),
(6,'Camilo', 95),
(7,'Zendaya', 500);

SELECT * from td_employee_bb;


