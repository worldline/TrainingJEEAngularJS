package net.worldline.training.angular.ws.service;


import net.worldline.training.angular.data.user.RoleConsts;
import net.worldline.training.angular.entity.News;
import net.worldline.training.angular.services.NewsDAO;

import org.apache.tapestry5.ioc.annotations.Inject;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import java.util.List;

@Path("/app")
public class NewsService {

  
    @Inject
    NewsDAO newsDaoService;

    @POST
    @Path("/news")
    @Consumes("application/json")
    @PermitAll
    //@RolesAllowed(RoleConsts.USER_ROLE)
    public Response postNews(News news) {

        news.setLikes(0);
        newsDaoService.add(news);
        return Response.status(201).entity(news).build();

    }


    @GET
    @Path("/news")
    @Consumes("application/json")
    @PermitAll
    public List<News> getNews() {

        List<News> ret = newsDaoService.getNews();
        return ret;

    }

    @GET
    @Path("/news/{id}")
    @Consumes("application/json")
    @PermitAll
    public News getNewsById(@PathParam("id")int id) {

        News ret = newsDaoService.getNewsById(id);
        return ret;

    }
    
    @GET
    @Path("/news/random")
    @Consumes("application/json")
    @PermitAll
    public News getRandomNews() {

        News ret = newsDaoService.getRandomNews();
        return ret;

    }
    

    @GET
    @Path("/news/like/{id}")
    @Consumes("application/json")
    @PermitAll
    public News incLike(@PathParam("id")int id) {

        News ret = newsDaoService.incLike(id);
        return ret;

    }


    @DELETE
    @Path("/news/{id}")
    @Consumes("application/json")
    @PermitAll
    //@RolesAllowed(RoleConsts.ADMIN_ROLE)
    public News deleteComment(@PathParam("id")int id) {

    	News ret = newsDaoService.delete(id);
        return ret;

    }

}