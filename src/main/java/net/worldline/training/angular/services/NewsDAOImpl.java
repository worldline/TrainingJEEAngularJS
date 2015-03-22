package net.worldline.training.angular.services;


import net.worldline.training.angular.entity.News;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import java.util.List;
import java.util.Random;

public class NewsDAOImpl implements NewsDAO
{
    private final Session session;

    public NewsDAOImpl(Session session)
    {
        this.session = session;
    }

    public List<News> getNews() {
        return session.createCriteria(News.class).addOrder(Order.desc("id")).list();
    }

    public News getNewsById(int id) {
    	return (News) session.createCriteria(News.class).add(Restrictions.eq("id", id)).uniqueResult();
	}
    
    public News getRandomNews() {
    	
    	News ret =null;
    	Criteria crit = session.createCriteria(News.class);
    	crit.setProjection(Projections.rowCount());
    	int count = ((Number) crit.uniqueResult()).intValue();
    	if (0 != count) {
    	  int index = new Random().nextInt(count);
    	  crit = session.createCriteria(News.class);
    	  ret =  (News)  crit.setFirstResult(index).setMaxResults(1).uniqueResult();
    	}
    	return ret;
    	
	}
    
    public List<News> getNewsByAuthor(String author) {
        return session.createCriteria(News.class).add(Restrictions.eq("author", author)).addOrder(Order.desc("id")).list();
    }

    
    
    public void add(News news) {
        session.save(news);
    }

    public News incLike(int newsId) {
    	News news = (News) session.createCriteria(News.class).add(Restrictions.eq("id", newsId)).uniqueResult();
    	news.setLikes(news.getLikes()+1);
        session.save(news);
        return news;
    }

    public News delete(int newsId) {
    	News news = (News) session.createCriteria(News.class).add(Restrictions.eq("id", newsId)).uniqueResult();
        session.delete(news);
        return news;
    }

	
}
