package net.worldline.training.angular.ws.service;


import net.worldline.training.angular.data.user.RoleConsts;
import net.worldline.training.angular.entity.Comment;
import net.worldline.training.angular.services.CommentDAO;
import net.worldline.training.angular.services.PhoneCatalog;

import org.apache.tapestry5.ioc.annotations.Inject;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import java.util.List;

@Path("/json/phone")
public class ProductResource {

    @Inject
    PhoneCatalog phoneCatalog;

    @Inject
    CommentDAO comments;

    @POST
    @Path("/comments")
    @Consumes("application/json")
    @RolesAllowed(RoleConsts.USER_ROLE)
    public Response postComment(Comment comment) {

        comment.setLikes(0);
        comments.add(comment);
        return Response.status(201).entity(comment).build();

    }


    @GET
    @Path("/comments/{id}")
    @Consumes("application/json")
    @PermitAll
    public List<Comment> getComments(@PathParam("id")String id) {

        List<Comment> ret = comments.getCommentsByPhoneId(id);
        return ret;

    }


    @GET
    @Path("/comments/like/{id}")
    @Consumes("application/json")
    @PermitAll
    public Comment incLike(@PathParam("id")int id) {

        Comment ret = comments.incLike(id);
        return ret;

    }


    @DELETE
    @Path("/comments/{id}")
    @Consumes("application/json")
    @RolesAllowed(RoleConsts.ADMIN_ROLE)
    public Comment deleteComment(@PathParam("id")int id) {

        Comment ret = comments.delete(id);
        return ret;

    }

}