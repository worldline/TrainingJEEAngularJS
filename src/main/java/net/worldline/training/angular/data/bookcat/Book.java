package net.worldline.training.angular.data.bookcat;


import net.worldline.training.angular.data.bookcat.BookComment;

import org.apache.tapestry5.json.JSONArray;
import org.apache.tapestry5.json.JSONObject;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.ObjectWriter;

import java.io.IOException;

public class Book {
	private String id;
	private String name;
	private String author;
	


	private Float price;
	private String description;
    private String category;
    private boolean isNew;
    private BookComment[]  comments;
   
    public Book() {
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public Float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setIsNew(boolean isNew) {
        this.isNew = isNew;
    }

    public boolean getIsNew() {
        return isNew;
    }

    public BookComment[] getComments() {
        return comments;
    }

    public void setComments(BookComment[] comments) {
        this.comments = comments;
    }

    
    /*public JSONObject getJSONObject() {
        String json="";
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        JSONObject ret = new JSONObject();

        ret.put("id",this.id);
        ret.put("author",this.author);
        ret.put("name",this.name);
        ret.put("description",this.description);
        ret.put("category",this.category);
        ret.put("price",this.price);
        ret.put("isNew",this.isNew);
        
        try {
        	
            json = ow.writeValueAsString(this.comments);
            ret.put("comments",new JSONArray(json));

        } catch (IOException e) {
            e.printStackTrace();
        }
        catch (Exception e) {
            e.printStackTrace();
        }

        return ret;

    }*/
}
