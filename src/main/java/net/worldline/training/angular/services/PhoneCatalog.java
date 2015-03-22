package net.worldline.training.angular.services;

import java.util.List;

import net.worldline.training.angular.data.phonecat.Phone;
import net.worldline.training.angular.data.phonecat.PhoneDetails;


public interface PhoneCatalog
{
    /**
     * Provides a list of all phone in an indeterminate order.
     */
    List<Phone> getPhones();

    String getPhonesAsString();

    PhoneDetails getPhonesDetails(String id);

    String getPhonesDetailsAsString(String id);


}
