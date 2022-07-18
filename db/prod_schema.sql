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