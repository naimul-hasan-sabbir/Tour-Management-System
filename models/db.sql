--Create Database
CREATE DATABASE tourmanagementsystem;
--creating table for tour places
CREATE TABLE places(
    id serial PRIMARY KEY,
    name VARCHAR ( 50 ) NOT NULL,
    cost INT NOT NULL,
    guide_name VARCHAR ( 50 )
)
--creating table for users
CREATE TABLE users(
    user_id serial PRIMARY KEY,
    name VARCHAR ( 50 ) NOT NULL,
    address VARCHAR ( 50 ) NOT NULL
)

CREATE TABLE guide(
    guide_id serial PRIMARY KEY,
    guide_name VARCHAR ( 50 ) NOT NULL,
    guide_address VARCHAR ( 50 ) NOT NULL
)