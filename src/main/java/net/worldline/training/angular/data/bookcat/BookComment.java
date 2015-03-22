package net.worldline.training.angular.data.bookcat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


public class BookComment {

   
    private String user;
    private String comment;
    private int rate;
   
     public BookComment() {
    }


    
    public String getUser() {
        return user;
    }

    public void setUser(String author) {
        this.user = author;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String content) {
        this.comment = content;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

 }
