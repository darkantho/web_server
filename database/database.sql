CREATE DATABASE esp32database;

CREATE TABLE devices(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    location TEXT
);

