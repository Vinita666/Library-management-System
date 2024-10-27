CREATE DATABASE LMS;
USE LMS;


-- AUTHORS
CREATE TABLE Authors (
    AuthorID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL
    );
INSERT INTO Authors VALUES (1, 'Vikram', 'Seth');
INSERT INTO Authors VALUES (2, 'Sarojni', 'Naidu');
INSERT INTO Authors VALUES (3, 'H.G', 'Wells');
INSERT INTO Authors VALUES (4, 'Leo', 'Tolstoy');


--  Books
CREATE TABLE Books (
    BookID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    AuthorID INT,
    Genre VARCHAR(50),
    PublishDate DATE,
    ISBN VARCHAR(20) UNIQUE,
    AvailableCopies INT DEFAULT 0
);


INSERT INTO Books (Title, AuthorID, Genre, PublishDate, ISBN, AvailableCopies) VALUES
('The Great Gatsby', 1, 'Fiction', '1925-04-10', '9780743273565', 3),
('To Kill a Mockingbird', 2, 'Fiction', '1960-07-11', '9780061120084', 2),
('1984', 3, 'Dystopian', '1949-06-08', '9780451524935', 5),
('Pride and Prejudice', 4, 'Romance', '1813-01-28', '9781503290563', 4);


--  Members
CREATE TABLE Members(
member_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
email VARCHAR (255) UNIQUE NOT NULL,
phone VARCHAR (20)
);

INSERT INTO Members (name, email, phone) VALUES
('Alice Johnson', 'alice.johnson@example.com', '123-456-7890'),
('Bob Smith', 'bob.smith@example.com', '234-567-8901'),
('Charlie Brown', 'charlie.brown@example.com', '345-678-9012'),
('Diana Prince', 'diana.prince@example.com', '456-789-0123'),




--  Reservations
CREATE TABLE Reservations (
    ReservationID INT PRIMARY KEY AUTO_INCREMENT,
    BookID INT,
    MemberID INT,
    ReservationDate DATE 
);

INSERT INTO Reservations (BookID, MemberID, ReservationDate) VALUES
(1, 6, '2023-06-17'),   
(2, 7, '2015-11-22'),   
(3, 8, '2005-06-27'),   
(4, 9, '2024-09-25');


-- Librarian  
CREATE TABLE Librarian (
 LibrarianID INT PRIMARY KEY,
 FirstName VARCHAR(50),
 LastName VARCHAR(50),
 Email VARCHAR(100),
 Phone VARCHAR(20)
);

INSERT INTO Librarian (LibrarianID, FirstName, LastName, Email, Phone) VALUES
(23,'Sarah', 'Connor', 'sarah.connor@example.com', '555-123-4567');

