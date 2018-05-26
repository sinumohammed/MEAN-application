# MEAN-application
Mangodb, express,angular, nodejs application for contact list


Agenda
------
.What is MEAN app?

.Mongo DB

.Express

.Angular 2

.Node.js

.CRUD Operations

.Contact List MEAN app

For running server
> npm run start 
Listen on port http://localhost:3000

For running client
> ng serve
open on port http://localhost:4200

# Heroku updation
git push heroku master


# For deployment
These options also apply to the serve command. If you do not pass a value for environment, it will default to dev for development and prod for production.

# Prod environment
ng build --target=production --environment=prod<br/>
ng build --prod --env=prod<br/>
ng build --prod<br/>
# Dev environment
ng build --target=development --environment=dev<br/>
ng build --dev --e=dev<br/>
ng build --dev<br/>
ng build<br/>
# To run the app from ngbuild generated code
npm install -g http-server [ install dependency in order to run from dist folder ]<br/>
http-server ./dist [ run index html from dist folder ]<br/>

View <a target="_blank" href="https://damp-bastion-45968.herokuapp.com/">Demo</a>