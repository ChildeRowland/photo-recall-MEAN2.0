#cmDevLog
Deploying MEAN2.0 applications with angular-cli

###Work-flow
1. In app directory, run ng test.  This will build a development environment in dist/ and begin watcher for changes.
2. Start mongodb in separate terminal.
3. Start the express server in separate terminal, via the dist/ directory: nodemon dist/app .  The drawback are the two watchers restarting over and over as the other works.
4. Commit changes and push to GitHub.
5. Use script: npm run build:heroku to prepare for deployment. This rewrites the dist/ directory and copies the file to a separate folder, adds server files, package.json and app.js.
6. Commit changes to the deployment repo, git push heroku master.
7. Check database for changes.

###Persistent Issues
1. ember-cli complier error
2. ngbootstrap via system-config
3. manually adjust the package.json file in the heroku directory for deployment.
4. New form module... explanations on how to use the module are sparse. 

## July 13

--------------------------------

## July 12

Added Dropdown component using css and Angular2, moved all the auth into the component.  Use ngIf to check is there is a user signed in and which menus are being displayed.  Used ElementRef to determine if someone is clicking inside or out of the dropdowns.

--------------------------------

## July 11

Completed the buld of user signup, signin, and log out.  Server and front end.

Continued to refine deployment process using angular-cli environment builds and gulp tasks.  See the work flow for how to start and deploy project.


--------------------------------

## July 10, 2016

Started on the user router.  New users can sign up and save basic profile information to the db.  Passwords aren't encrypted yet.  In course, added an AuthComponent to hold all the sign-up, sign-in, and logout components.  Added AuthService to store all the http requests.

Connected the deployed Heroku application via MongoLab.  Moved the mongoose connect URL variable to a hidden config.js file.  Explored Angular2 environments, to switch between development and production URLs for server requests.

Slight restructuring of the server directory for models and routes.

Explored different ways to structure the routes, what is handled by Angular and what is handled by Express.  

--------------------------------

## July 9

Added bootstrap link CND link.

Started building out the back-end with user model.  Then switched to the front-end, adding a navigation component for the navigation bar, and sign-up component, user class, and new user sign-up from.

Spent a lot of time on angular-cli and related docs, trying to access ng bootstrap via the system-config.ts file.

--------------------------------

## July 8

Experimented with how ng build creates the dist folder.  For the time being, the express server file has to be directly in the src file.  When I put it in another child folder, like src/server/app.js, the complier throws syntax errors, even though the proper file is being sent.

Server sub-folder seem to work fine for models and routes.

Deployed the application to Heroku:
1. use the ng build command in the terminal
2. copy the package.json file into the /dist folder
3. add the script "start": "node app.js" to package.json
4. remove the other scripts from package.json
5. $ git init / git add -A / git commit
6. $ heroku git:remote -a fast-hamlet-44674 
7. git push heroku master

###Problems:
1. ng build rewrites everything in the dist folder, so this has to be done for every deploy.

###Solution:
Instead of trying to hack into the ngbuild script that Angular2 is using, I'm using gulp to copy all the files created in the dist directory into a Heroku directory.  Gulp scripts clean the Heroku directory without touching the .git files, then add a package.json.

--------------------------------

## July 7

Set up angular-cli and simple express server.

Run the server in the terminal $ node dist/app 
