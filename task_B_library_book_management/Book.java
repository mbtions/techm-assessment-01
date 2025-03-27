package task_B_library_book_management;

class Book {
    // Attributes for book details
    private String title;
    private String author;
    private double price;

    // Constructor to initialize Book object
    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    // Method to display book details
    public void displayDetails() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: Rs." + price);
    }

    // Getter for title (used for searching)
    public String getTitle() {
        return title;
    }
}
