package net.worldline.training.angular.services;

import java.util.List;

import net.worldline.training.angular.data.bookcat.Book;


public interface BookCatalog
{
    /**
     * Provides a list of all phone in an indeterminate order.
     */
    List<Book> getBooks();

    String getBooksAsString();

    Book getBookDetails(String id);

    String getBookDetailsAsString(String id);


}
