package net.worldline.training.angular.components;

import org.apache.tapestry5.BindingConstants;
import org.apache.tapestry5.ComponentResources;
import org.apache.tapestry5.annotations.Import;
import org.apache.tapestry5.annotations.Parameter;
import org.apache.tapestry5.annotations.Property;
import org.apache.tapestry5.ioc.annotations.Inject;
import org.apache.tapestry5.services.Request;

@Import(stylesheet={"context:/phonecat/css/phonecat/app.css","context:/phonecat/css/phonecat/bootstrap.css"})
public class T5Layout
{

	@Property
    private String pageName;
	
	@Inject
	private Request request;
	
	

    @Property
    @Parameter(required = true, defaultPrefix = BindingConstants.LITERAL)
    private String pageTitle;

    @Inject
    private ComponentResources resources;
    
   
  }
