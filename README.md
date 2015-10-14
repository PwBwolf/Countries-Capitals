# Countries-Capitals
##angular-animaAngulars geolocator app
Angular app that allows users to search and visualize data about countries and capital cities.


### Index View
This view is just responsible for displaying some explanatory text about your app. 

### Countries List 
This view is responsible for letting the user see all of the countries about which they can view more detailed information. Each row entry has the following summary information: name, country code, capital, area in square kilometers, population and continent code.

### Country Detail

This view shows users detailed information about a country. The app will display the following data: country name, population of country, area, capital, population of capital, continent, timezone and number and names of neighbors.

View also displays an image of the flag and map for the country.


#### Tech
Gulp task that minifies and builds the files for live deployment

#####gulp plugins used
 gulp-clean - A gulp plugin for removing files and folders.

 gulp-connect - Gulp plugin to run a webserver (with LiveReload)

 gulp-minify-css - Minify css with clean-css.
 
 gulp-minify-html - Minify html with minimize.
 
 gulp-ngmin - Pre-minify AngularJS apps with ngmin
 
 gulp-rev - Static asset revisioning by appending content hash to filenames: unicorn.css => unicorn-d41d8cd98f.css
 
 gulp-sass - Gulp plugin for sass
 
 gulp-uglify - Minify files with UglifyJS
 
 gulp-usemin - Replaces references to non-optimized scripts or stylesheets into a set of HTML files (or any templates/views).