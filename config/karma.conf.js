// Karma configuration
// Generated on Fri Feb 07 2014 10:58:31 GMT+0100 (Paris, Madrid)

module.exports = function (config) {

    var basePath= '../',
        testsPath= 'test/unit/',
        extLibsPath= 'src/main/webapp/bower_components',
        appPath= 'src/main/webapp/bookcat';


    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: basePath,


        // Used to change your templates/views into js testable files.

        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
                extLibsPath + '/angular/angular.js',
                extLibsPath + '/angular-route/angular-route.js',
                extLibsPath + '/angular-cookies/angular-cookies.js',
                extLibsPath + '/angular-translate/angular-translate.js',
                extLibsPath + '/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
                extLibsPath + '/angular-resource/angular-resource.js',
                extLibsPath + '/angular-mocks/angular-mocks.js',
                appPath + '/js/**/*.js',
                testsPath + '/**/*Spec.js'
            ],

        // generate js files from html templates
        preprocessors: {
            'templates/partials/*.html': 'ng-html2js'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
	    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    	reporters: ['progress', 'junit'],

    	junitReporter: {
      		outputFile: '../../../../reports/unit/report.xml',
      		suite: ''
    	},


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
