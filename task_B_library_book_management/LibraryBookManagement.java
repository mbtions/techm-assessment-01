package task_B_library_book_management;

import java.util.Scanner;

public class LibraryBookManagement {

    // search for a book by title
    public static void searchBookByTitle(Book[] books, String titleToSearch) {
        boolean found = false;

        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(titleToSearch)) {
                book.displayDetails();
                found = true;
                break;
            }
        }

        // When book not found
        if (!found) {
            System.out.println("Book with title '" + titleToSearch + "' not found in the library.");
        }
    }

    public static void main(String[] args) {
        // Create an array of 5 Book objects
        Book[] books = new Book[5];

        // Initialize books with sample data
        books[0] = new Book("The Great Gatsby", "F. Scott Fitzgerald", 799);
        books[1] = new Book("To Kill a Mockingbird", "Harper Lee", 899);
        books[2] = new Book("The Power of Your Subconscious Mind", "Joseph Murphy", 699);
        books[3] = new Book("Pride and Prejudice", "Jane Austen", 749);
        books[4] = new Book("Ikigai", "Hector Garcia", 450);

        Scanner sc = new Scanner(System.in);

        // Take input from the user to search for a book
        System.out.print("Enter the title of the book you want to search: ");
        String targetTitle = sc.nextLine();

        // Search
        searchBookByTitle(books, targetTitle);

        sc.close();
    }
}
