'use strict';
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        concat: {
            js: {
                src: ['src/main/webapp/bower_components/**/*.js', 'src/main/webapp/bookcat/js/**/*.js'],
                dest: 'prod/<%= pkg.name %>.js'
            },
            css: {
                src: ['src/main/webapp/bookcat/style/**/*.css'],
                dest: 'prod/style/styles.css'
            }
        },

        watch: {
            js: {
                files: ['src/main/webapp/bookcat/js/**/*.js', 'test/unit/**/*.js'],
                tasks: ['karma:unit:run'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['src/main/webapp/bookcat/style/**/*.css'],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        },

        copy: {
            prod: {
                cwd: 'src/main/webapp/bookcat/',
                expand: true,
                src: ['**'],
                dest: 'prod/'
            }
        },

        eslint: {
            all: ['src/main/webapp/bookcat/js/**/*.js'],
            options: {
                config: "config/eslint-browser.json"
            }
        },

        uglify: {
            prod: {
                files: [{
                    expand: true,
                    cwd: 'prod/js',
                    src: '**/*.js',
                    dest: 'prod/js'
                }],
                options: {
                    mangle: true
                }
            }
        },

        cssmin: {
            combine: {
                options: {
                    banner: '/* CSS Minified stylesheet */'
                },
                files: {
                    'prod/style/styles.css': ['prod/style/styles.css']
                }
            }
        },

        htmlmin: {
            prod: {
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'prod/',
                    src: ['index.html', 'templates/**/*.html'],
                    dest: 'prod/'
                }
                ]
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['src/main/webapp/bookcat/style/*.css']
            }
        },
        clean: {
            prodpre: {
                src: ["prod/*"]
            }
        },

        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            }
        },

        protractor: {
            options: {
                configFile: "node_modules/protractor/referenceConf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                args: {
                    // Arguments passed to the command
                }
            },
            run: {
                configFile: "config/protractor-conf.js",
                options: {
                    args: {}
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'app',
                    livereload: false,
                    open: false,
                    middleware: function (connect, options) {
                        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                        return [
                            // Include the proxy first
                            proxy,
                            // Serve static files.
                            connect.static(options.base),
                            // Make empty directories browsable.
                            connect.directory(options.base)
                        ];
                    }

                },
                proxies: [
                    {
                        context: '/api',
                        host: 'localhost',
                        port: 8080,
                        https: false,
                        changeOrigin: false,
                        xforward: false
                        /*,rewrite: {
                            '^/api': '/api'
                        }*/
                    }
                ]
            },
            prod: {
                options: {
                    port: 9002,
                    base: 'prod',
                    livereload: false,
                    open: true,
                    middleware: function (connect, options) {
                        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                        return [
                            // Include the proxy first
                            proxy,
                            // Serve static files.
                            connect.static(options.base),
                            // Make empty directories browsable.
                            connect.directory(options.base)
                        ];
                    }
                },
                proxies: [
                    {
                        context: '/api',
                        host: '127.0.0.1',
                        port: 3000,
                        https: false,
                        changeOrigin: false,
                        xforward: false
                        /*,rewrite: {
                            '^/api': '/api'
                        }*/
                    }
                ]

            }
        }
    });

    require('matchdep').filterDev('grunt-contrib-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('eslint-grunt');

    grunt.registerTask("build", [
        "test",
        "clean:prodpre",
        "check",
        "copy:prod",
        "cssmin",
        "htmlmin:prod",
        "uglify:prod"
    ]);

    grunt.registerTask("check", [
        "eslint:all"
        /*,"csslint"*/
    ]);

    grunt.registerTask("test:unit", [
        'karma'
    ]);

    grunt.registerTask('test:e2e', [
        'configureProxies:server',
        'connect:server',
        'protractor:run'
    ]);

    grunt.registerTask("test", [
        'connect:server',
        'karma',
        'protractor:run'
    ]);

    grunt.registerTask("default", [
        'configureProxies:server',
        "connect:server",
        "watch"
    ]);


    grunt.registerTask("runProd", [
        "build",
        "connect:prod",
        "watch"
    ]);
};