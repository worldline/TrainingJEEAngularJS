package net.worldline.training.angular.services;



import net.worldline.training.angular.entity.User;

import org.apache.tapestry5.hibernate.annotations.CommitAfter;

public interface UserDAO
{
    User getUserByLogin(String login);

    @CommitAfter
    void add(User user);

}
