// JavaScript code for handling the search functionality

// Mock data for search
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "Moby Dick", author: "Herman Melville" }
];

// Search function
function searchBooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResult = document.getElementById("searchResult");

    // Filter books based on input
    const results = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) || 
        book.author.toLowerCase().includes(searchInput)
    );

    // Display results
    if (results.length > 0) {
        searchResult.innerHTML = `
            <h3>Search Results:</h3>
            <ul>
                ${results.map(book => `<li>${book.title} by ${book.author}</li>`).join("")}
            </ul>
        `;
    } else {
        searchResult.innerHTML = "<p>No results found. Please try again.</p>";
    }
}
