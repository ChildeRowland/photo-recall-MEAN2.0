#cmDevLog
Deploying MEAN2.0 applications with angular-cli

###Persistent Issues
1.ember-cli complier error:
2.ngbootstrap via system-config
3.manually adjust the package.json file in the heroku directory for deployment.
4.New form module... explanations on how to use the module are sparse. 

## July 9, 2016

Added bootstrap link CND link.

Started building out the back-end with user model.  Then switched to the front-end, adding a navigation component for the navigation bar, and sign-up component for new users.

Spent a lot of time on angular-cli and related docs, trying to access ng bootstrap via the system-config.ts file.


## July 8, 2016

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
Instead of trying to hack into the ngbuild script that Angular2 is using, I'm using gulp to copy all the files created in the dist directory into a heroku directory.  Gulp scripts clean the heroku directory without touching the .git files, then add a package.json.


## July 7, 2016

Set up angular-cli and simple express server.

Run the server in the terminal $ node dist/app 
