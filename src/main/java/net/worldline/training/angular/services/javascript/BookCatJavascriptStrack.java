package net.worldline.training.angular.services.javascript;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.tapestry5.Asset;
import org.apache.tapestry5.SymbolConstants;
import org.apache.tapestry5.func.F;
import org.apache.tapestry5.func.Mapper;
import org.apache.tapestry5.ioc.annotations.Symbol;
import org.apache.tapestry5.services.AssetSource;
import org.apache.tapestry5.services.javascript.JavaScriptStack;
import org.apache.tapestry5.services.javascript.StylesheetLink;
import org.got5.tapestry5.jquery.utils.JQueryUtils;

public class BookCatJavascriptStrack implements JavaScriptStack { 
	
public static final String STACK_ID = "BookCatStack";
	
	private final boolean productionMode;

    private final List<Asset> javaScriptStack;

    private final List<StylesheetLink> stylesheetStack;

    public BookCatJavascriptStrack(@Symbol(SymbolConstants.PRODUCTION_MODE)
                                 final boolean productionMode,
                                 final AssetSource assetSource)
    {
        this.productionMode = productionMode;

        final Mapper<String, Asset> pathToAsset = new Mapper<String, Asset>()
        {

            public Asset map(String path)
            {
                return assetSource.getExpandedAsset(path);
            }
        };


        final Mapper<String, StylesheetLink> pathToStylesheetLink = F.combine(pathToAsset, JQueryUtils.assetToStylesheetLink);

        if (productionMode) {
        	
        stylesheetStack = F.flow("${bookcat.core.path}/style/bootstrap.css",
        						 "${bookcat.core.path}/style/k-structure.css",
        						 "${bookcat.core.path}/style/k-theme0.css",
								 "${bookcat.core.path}/style/style.css").map(pathToStylesheetLink).toList(); 

            javaScriptStack = F
                   .flow("${bookcat.core.path}/js/modules/sdco.js",
                		 "${bookcat.core.path}/js/app.js",
                		 "${bookcat.core.path}/js/services/auth-utils.js", 
						 "${bookcat.core.path}/js/services/CatalogService.js",
						 "${bookcat.core.path}/js/services/NewsService.js",
						 "${bookcat.core.path}/js/services/ProductUtils.js",
						 "${bookcat.core.path}/js/directives/productSummary.js",
						 "${bookcat.core.path}/js/controllers/BasketController.js",
						 "${bookcat.core.path}/js/controllers/CatalogController.js",
						 "${bookcat.core.path}/js/controllers/DetailController.js",
						 "${bookcat.core.path}/js/controllers/HomeController.js",
						 "${bookcat.core.path}/js/controllers/LoginController.js",
						 "${bookcat.core.path}/js/controllers/ProfileController.js",
						 "${bookcat.core.path}/js/filters/startFrom.js"
						)
            .map(pathToAsset).toList();


        } else {
        	
        	stylesheetStack = F.flow("${bookcat.core.path}/style/bootstrap.css",
        							 "${bookcat.core.path}/style/k-structure.css",
					 				 "${bookcat.core.path}/style/k-theme0.css",
					 				 "${bookcat.core.path}/style/style.css").map(pathToStylesheetLink).toList(); 


            javaScriptStack = F
                       .flow("${bookcat.core.path}/js/modules/sdco.js",
                       		 "${bookcat.core.path}/js/app.js",
                    		 "${bookcat.core.path}/js/services/auth-utils.js",
							 "${bookcat.core.path}/js/services/CatalogService.js",
							 "${bookcat.core.path}/js/services/NewsService.js",
							 "${bookcat.core.path}/js/services/ProductUtils.js",
							 "${bookcat.core.path}/js/directives/productSummary.js",
							 "${bookcat.core.path}/js/controllers/BasketController.js",
							 "${bookcat.core.path}/js/controllers/CatalogController.js",
							 "${bookcat.core.path}/js/controllers/DetailController.js",
							 "${bookcat.core.path}/js/controllers/HomeController.js",
							 "${bookcat.core.path}/js/controllers/LoginController.js",
							 "${bookcat.core.path}/js/controllers/ProfileController.js",
							 "${bookcat.core.path}/js/filters/startFrom.js"
							 )
                    .map(pathToAsset).toList();

        }

    }

    public String getInitialization()
    {
        return productionMode ? null : "Tapestry.DEBUG_ENABLED = true;";
    }

    public List<Asset> getJavaScriptLibraries()
    {
        return javaScriptStack;
    }

    public List<StylesheetLink> getStylesheets()
    {
    	return stylesheetStack;
    }

    public List<String> getStacks()
    {
    	List<String> ret = new ArrayList<String>(1);
    	ret.add(AngularJavaScriptStack.STACK_ID);
        return ret;
    }

}
