package net.worldline.training.angular.services;



import net.worldline.training.angular.entity.Comment;

import org.apache.tapestry5.hibernate.annotations.CommitAfter;

import java.util.List;

public interface CommentDAO
{
    List<Comment> getCommentsByPhoneId(String phoneId);

    @CommitAfter
    void add(Comment comment);

    @CommitAfter
    Comment incLike(int commentId);

    @CommitAfter
    Comment delete(int commentId);

}
