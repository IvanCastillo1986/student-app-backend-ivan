DROP DATABASE IF EXISTS djc05eu2fpavk;
CREATE DATABASE djc05eu2fpavk;

\c djc05eu2fpavk;

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