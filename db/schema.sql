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

-- to run the file and set up the database in our local environment, we are going to run this command:
-- psql -U postgres -f db/schema.sql
-- -U <username>  :  Connect to the database as the user <username> instead of the default
-- -f <filename>  :  Read commands from the file <filename>, rather than standard input.

