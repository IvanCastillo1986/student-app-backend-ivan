DROP DATABASE IF EXISTS d522dfvh2pmtqp;
CREATE DATABASE d522dfvh2pmtqp;

\c d522dfvh2pmtqp;

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
    student_id INT REFERENCES students(id),
    grade VARCHAR DEFAULT '0',
    date_tested DATE NOT NULL DEFAULT CURRENT_DATE
);