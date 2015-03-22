//
// Copyright 2015 Worldline 
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
package net.worldline.training.angular.services.javascript;

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

public class AngularJavaScriptStack implements JavaScriptStack {

	public static final String STACK_ID = "AngularStack";
	
	private final boolean productionMode;

    private final List<Asset> javaScriptStack;

    public AngularJavaScriptStack(@Symbol(SymbolConstants.PRODUCTION_MODE)
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


        if (productionMode) {
        	
            	 
            javaScriptStack = F
                .flow("${angular.core.path}/angular/angular.min.js",
                      //"${angular.core.path}/angular-ui-router/angular-ui-router.min.js",
                      "${angular.core.path}/angular-route/angular-route.min.js",
         			  "${angular.core.path}/angular-cookies/angular-cookies.min.js",
         			  "${angular.core.path}/angular-translate/angular-translate.min.js",
         			  "${angular.core.path}/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js",
                      "${angular.core.path}/angular-resource/angular-resource.min.js")
            .map(pathToAsset).toList();


        } else {
        	

            javaScriptStack = F
                    .flow(  "${angular.core.path}/angular/angular.js",
                            //"${angular.core.path}/angular-ui-router/release/angular-ui-router.js",
                            "${angular.core.path}/angular-route/angular-route.js",
               			  	"${angular.core.path}/angular-cookies/angular-cookies.js",
               			  	"${angular.core.path}/angular-translate/angular-translate.js",
               			  	"${angular.core.path}/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js",
                            "${angular.core.path}/angular-resource/angular-resource.js")
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
        return Collections.emptyList();
    }

    public List<String> getStacks()
    {
        return Collections.emptyList();
    }

}
