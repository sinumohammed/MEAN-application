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



For deployment
These options also apply to the serve command. If you do not pass a value for environment, it will default to dev for development and prod for production.

# these are equivalent
ng build --target=production --environment=prod
ng build --prod --env=prod
ng build --prod
# and so are these
ng build --target=development --environment=dev
ng build --dev --e=dev
ng build --dev
ng build

npm install -g http-server [ install dependencyin order to run from dist folder ]
http-server ./dist [ run index html from dist folder ]

View <a target="_blank" href="https://damp-bastion-45968.herokuapp.com/">Demo</a>