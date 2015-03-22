package net.worldline.training.angular.services;

import java.io.*;
import java.util.Hashtable;
import java.util.List;

import net.worldline.training.angular.data.bookcat.Book;

import org.apache.tapestry5.json.JSONArray;
import org.apache.tapestry5.json.JSONObject;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.ObjectWriter;
import org.codehaus.jackson.type.TypeReference;


public class BookCatalogImpl implements BookCatalog
{

    private List<Book> catalog;

    private Hashtable<String, Book> hBookDetails;

    private StringBuilder bookStrBuilder;

    private final String path = "net/worldline/training/angular/pages/books/";


    public BookCatalogImpl() {


        try {


            final String filePath = path + "catalog.json";
            // read the json file
            ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
            InputStream inputStream = classLoader.getResourceAsStream(filePath);

            BufferedReader streamReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
            bookStrBuilder = new StringBuilder();

            String inputStr;
            while ((inputStr = streamReader.readLine()) != null)
                    bookStrBuilder.append(inputStr);

            final ObjectMapper mapper = new ObjectMapper();


            catalog = mapper.readValue(bookStrBuilder.toString(), new TypeReference<List<Book>>() { });

            hBookDetails = new Hashtable();

            for (Book book : catalog) {

                hBookDetails.put(book.getId(),book);
                

            }

        }

        catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        } catch (NullPointerException ex) {
            ex.printStackTrace();
        }
    }


    			
	public List<Book> getBooks() {
		 return catalog;
	}

    public String getBooksAsString() {
        return bookStrBuilder.toString();
    }


    public Book getBookDetails(String id) {
        return hBookDetails.get(id);
    }


    public String getBookDetailsAsString(String id) {
        Book book=  hBookDetails.get(id);
        String json="";
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        JSONObject ret = new JSONObject();

            ret.put("id",book.getId());
            ret.put("author",book.getAuthor());
            ret.put("name",book.getName());
            ret.put("description",book.getDescription());
            ret.put("category",book.getCategory());
            ret.put("price",book.getPrice());
            ret.put("isNew",book.getIsNew());
            
            try {
            	
                json = ow.writeValueAsString(book.getComments());
                ret.put("comments",new JSONArray(json));

            } catch (IOException e) {
                e.printStackTrace();
            }
            catch (Exception e) {
                e.printStackTrace();
            }

            return ret.toString();

    }



}
