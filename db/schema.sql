DROP DATABASE IF EXISTS students_dev;
CREATE DATABASE students_dev;

\c students_dev;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    company TEXT,
    pic TEXT,
    city TEXT,
    skill TEXT
);

CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id), --This is the Foreign Key. Doesn't need FOREIGN KEY value unless adding name to key
    grade VARCHAR DEFAULT '0',
    date_tested DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Postgres Date data type
-- When storing a Date value, PostgreSQL uses the yyyy-mm-dd format e.g. 2000-12-31.
-- It also uses this format for inserting data into a Date column.
-- Use CURRENT_DATE after the DEFAULT keyword when creating table to use the current date as default.

-- Can also write Foreign Key as:
-- student_id INT,
-- FOREIGN KEY (student_id) REFERENCES students(id)

-- If I wanted to name the Foreign Key, I could write it out as :
-- student_id INT,
-- CONSTRAINT fk_StudentGradeId FOREIGN KEY (student_id) REFERENCES students(id)


-- to run the file and set up the database in our local environment, we are going to run this command:
-- psql -U postgres -f db/schema.sql
-- -U <username>  :  Connect to the database as the user <username> instead of the default
-- -f <filename>  :  Read commands from the file <filename>, rather than standard input.


-- CREATE TABLE  -  Creates a new Database