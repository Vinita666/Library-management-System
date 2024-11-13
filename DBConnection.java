import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/LMS";
    private static final String USER = "root";
    private static final String PASSWORD = "password"; 

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AuthorDAO {
    public void addAuthor(Author author) throws SQLException {
        String query = "INSERT INTO Authors (FirstName, LastName) VALUES (?, ?)";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, author.getFirstName());
            stmt.setString(2, author.getLastName());
            stmt.executeUpdate();
        }
    }

    public Author getAuthorById(int authorId) throws SQLException {
        String query = "SELECT * FROM Authors WHERE AuthorID = ?";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, authorId);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return new Author(rs.getInt("AuthorID"), rs.getString("FirstName"), rs.getString("LastName"));
            }
        }
        return null;
    }

    public List<Author> getAllAuthors() throws SQLException {
        List<Author> authors = new ArrayList<>();
        String query = "SELECT * FROM Authors";
        try (Connection connection = DBConnection.getConnection();
                Statement stmt = connection.createStatement();
                ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                authors.add(new Author(rs.getInt("AuthorID"), rs.getString("FirstName"), rs.getString("LastName")));
            }
        }
        return authors;
    }

    public void updateAuthor(Author author) throws SQLException {
        String query = "UPDATE Authors SET FirstName = ?, LastName = ? WHERE AuthorID = ?";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, author.getFirstName());
            stmt.setString(2, author.getLastName());
            stmt.setInt(3, author.getAuthorID());
            stmt.executeUpdate();
        }
    }

    public void deleteAuthor(int authorId) throws SQLException {
        String query = "DELETE FROM Authors WHERE AuthorID = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, authorId);
            stmt.executeUpdate();
        }
    }
}

public class Author {
    private int authorID;
    private String firstName;
    private String lastName;

    public Author(int authorID, String firstName, String lastName) {
        this.authorID = authorID;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getAuthorID() {
        return authorID;
    }

    public void setAuthorID(int authorID) {
        this.authorID = authorID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BookDAO {
    public void addBook(Book book) throws SQLException {
        String query = "INSERT INTO Books (Title, AuthorID, Genre, PublishDate, ISBN, AvailableCopies) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, book.getTitle());
            stmt.setInt(2, book.getAuthorID());
            stmt.setString(3, book.getGenre());
            stmt.setDate(4, Date.valueOf(book.getPublishDate()));
            stmt.setString(5, book.getIsbn());
            stmt.setInt(6, book.getAvailableCopies());
            stmt.executeUpdate();
        }
    }

    public Book getBookById(int bookId) throws SQLException {
        String query = "SELECT * FROM Books WHERE BookID = ?";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, bookId);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return new Book(rs.getInt("BookID"), rs.getString("Title"), rs.getInt("AuthorID"),
                        rs.getString("Genre"), rs.getDate("PublishDate").toLocalDate(), rs.getString("ISBN"),
                        rs.getInt("AvailableCopies"));
            }
        }
        return null;
    }

    public List<Book> getAllBooks() throws SQLException {
        List<Book> books = new ArrayList<>();
        String query = "SELECT * FROM Books";
        try (Connection connection = DBConnection.getConnection();
                Statement stmt = connection.createStatement();
                ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                books.add(new Book(rs.getInt("BookID"), rs.getString("Title"), rs.getInt("AuthorID"),
                        rs.getString("Genre"), rs.getDate("PublishDate").toLocalDate(), rs.getString("ISBN"),
                        rs.getInt("AvailableCopies")));
            }
        }
        return books;
    }

    public void updateBook(Book book) throws SQLException {
        String query = "UPDATE Books SET Title = ?, AuthorID = ?, Genre = ?, PublishDate = ?, ISBN = ?, AvailableCopies = ? WHERE BookID = ?";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, book.getTitle());
            stmt.setInt(2, book.getAuthorID());
            stmt.setString(3, book.getGenre());
            stmt.setDate(4, Date.valueOf(book.getPublishDate()));
            stmt.setString(5, book.getIsbn());
            stmt.setInt(6, book.getAvailableCopies());
            stmt.setInt(7, book.getBookID());
            stmt.executeUpdate();
        }
    }

    public void deleteBook(int bookId) throws SQLException {
        String query = "DELETE FROM Books WHERE BookID = ?";
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, bookId);
            stmt.executeUpdate();
        }
    }
}
import java.time.LocalDate;

public class Book {
    private int bookID;
    private String title;
    private int authorID;
    private String genre;
    private LocalDate publishDate;
    private String isbn;
    private int availableCopies;

    public Book(int bookID, String title, int authorID, String genre, LocalDate publishDate, String isbn,
            int availableCopies) {
        this.bookID = bookID;
        this.title = title;
        this.authorID = authorID;
        this.genre = genre;
        this.publishDate = publishDate;
        this.isbn = isbn;
        this.availableCopies = availableCopies;
    }

    // Getters and setters
    public int getBookID() {
        return bookID;
    }

    public void setBookID(int bookID) {
        this.bookID = bookID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getAuthorID() {
        return authorID;
    }

    public void setAuthorID(int authorID) {
        this.authorID = authorID;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public LocalDate getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(LocalDate publishDate) {
        this.publishDate = publishDate;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public int getAvailableCopies() {
        return availableCopies;
    }

    public void setAvailableCopies(int availableCopies) {
        this.availableCopies = availableCopies;
    }
}