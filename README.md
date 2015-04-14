# TrainingJEEAngularJS

This repo  contains the Lab project for the AngularJS Training in JEE world.
for more details, have a look at [http://worldline.github.io/TrainingJEEAngularJS](http://worldline.github.io/TrainingJEEAngularJS/#/title)

## To run this application

```bash
mvn jetty:run
```
Application is now running in : [http://localhost:8080/](http://localhost:8080/)

## To install test environment 

**install Node.js**

[http://nodejs.org/](http://nodejs.org/)

Make sure node and npm are in the your Path.
```bash
echo $PATH
```
_Configure NPM proxy_
```bash
npm config set proxy http://[proxy]:[PORT]
npm config set https-proxy http://[proxy]:[PORT]
```
check also proxy variables 
```bash
set HTTP_PROXY=http://[proxy]:[PORT]
set HTTPS_PROXY=http://[proxy]:[PORT]
```

**Install node modules

```bash
npm install -g bower
npm install -g grunt-cli
npm install
```

## To run integration tests 

make sure your application is running on  [http://localhost:8080/](http://localhost:8080/)

run protractor tests 
```bash
grunt test:e2e
```

## Online exercices
Here are the solutions for the different online exercice : 

* [Slide 24 - Two-Way Data Binding Magic](https://gist.github.com/got5/d699b5a4362d057fe995)
* [Slide 29 - Expressions in AngularJS] (https://gist.github.com/got5/a8fade483f338178dd7b)
* [Slide 39 - Use of $watch by Angular](https://gist.github.com/got5/a19fe6e66c3c9c927fad)
* [Slide 46 - To conclude about controllers..](https://gist.github.com/got5/65a58721d7ac7a2b8db3)
* [Slide 67 - Main Angular services: $http](https://gist.github.com/got5/e5eb8798533505f87329)
* [Slide 114 - Native Angular directives](https://gist.github.com/got5/ad8e4ccf9a5022509a7a)
* [Slide 115 - Using the link function](https://gist.github.com/got5/19d7a41a8b81c1200bdf)
* [Slide 125 - Using the scope property](https://gist.github.com/got5/378724ebc7fbf37628a0)
* [Slide 130 - Creating new directives](https://gist.github.com/got5/c93cecb0ed1f71a7ad67)
* [Slide 137 - Let's use Angular Filters!](https://gist.github.com/got5/136742dc4170e184476b)
* [Slide 144 - Using form validation methods](https://gist.github.com/got5/fabd51ee4221ebfc347a)

## links

* [Immediately-invoked Function Expressions](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailnamespacing)
* [support for script-async for IE>10](http://caniuse.com/#feat=script-async)
* [difference between angular-route and angular-ui-router](http://www.meanstack.co/difference-between-angular-route-and-angular-ui-router/)