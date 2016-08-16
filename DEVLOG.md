#cmDevLog
Deploying MEAN2.0 applications with angular-cli

###Work-flow
1. In app directory, run ng test.  This will build a development environment in dist/ and begin watcher for changes.
2. Start mongodb in separate terminal.
3. Start the express server in separate terminal, via the dist/ directory: nodemon dist/app .  The drawback are the two watchers restarting over and over as the other works.
4. Commit changes and push to GitHub.
5. Use script: npm run build:heroku to prepare for deployment. This rewrites the dist/ directory and copies the file to a separate folder, adds server files, package.json and app.js.
6. cd heroku
7. Commit changes to the deployment repo, git push heroku master.
8. Check database for changes.

###Persistent Issues
1. ember-cli error
2. ngbootstrap via system-config
3. manually adjust the package.json file in the heroku directory for deployment.

## August 16

Ran into problems using ngIf and the routerLink. When loading new elements into the DOM, the routerLink path is wrong, pointing to '/' or '/another-route'.  Refreshing the page fixes this.

Wrote a function on the AuthService that verifies the users credentials, and returns a boolean. This way, if the credentials expire, the session will end before trying to submit a request that requires verification.  This turned out to be clunky to implement, requiring change detection.  So in the meantime, the app checks for the localStorage token, and send back a 401 when a user tries to change something after the token expires.

--------------------------------

## August 15

Merged the Create Quiz route with the Upload route.  Now users can select a single image file, upload it to the app's file system.  When the imaged is uploaded, a new quiz is created by saving the name of the file to the db.

Began work on the visible content that a user will see when signed it.  Originally thought I would group Custom Quizzes, User Profile, and game sessions all on the same page. 

--------------------------------

## August 14

Updated the /upload route to take advantage of the multer module diskStorage function.  Now the files keep their original name, along with the date and file extension.  This should be easier to save the location to the db.

--------------------------------

## August 13

Re-evaluated options for photo uploading.  While using a external service is clearly the best option, in the mean time I'm going to save files locally, with restrictions on file size and number of images.  

--------------------------------

## August 12

Added token verification to the Quiz routes and the User route that populates the user sub-documents. Send the token and the salt necessary for verification via the header.  Using Express router.use to get the header data, decode the token and add the user id to request. The rest of the routes use the user id to complete CRUD operations.

--------------------------------

## August 11, 2016

Better implemented the Express Router for the Quiz routes.
	router.param for the routes with a Quiz id
	router.route for Quiz to handle multiple http request with a single instance
Continued to build out the CRUD for Quiz and Question.
Re-factored the User route to populate the Quizzes array, instead of making a seperate request to find by the Quizzes Object Id.

--------------------------------

## August 9

Mongoose Quiz and child Question models.
Quiz routes: POST new quiz, GET all quizzes, GET single quiz, POST questions to quiz.
Began hooking up the Quizzes to a User via ref.

--------------------------------

## August 8

Test user model for required and unique emails.

--------------------------------

## August 2

Installed mocha and chai for server tests.  Began writing tests for User model.

--------------------------------

## July 26

Roughed out the basic game session.  The components are grouped together in the Game Component, but it requires a few Event Emitters to load in different components.

--------------------------------

## July 23

Created new component for gaming sessions, and refactored the code to work for creating games or playing them.

--------------------------------

## July 22

Question Service can serve an array of questions, add, update, and delete.  When a user choses to edit a question, the service provides an EventEmitter, and passes the object to the Question Input Component to use the same form for new entries.

Because there is no Angular2 set-to-pristine method, the question form values are set to empty strings after submit.

Also using scrollIntoView() after button clicks. Not sure if there is an Angular way to do this.

--------------------------------

## July 21

Tried multiply inheritance strategies for the Question Service, to keep it versatile.  Decided to uses the providers property in the quiz component, and try to use the quiz component to house creating and updating games, as well as serving them to be played.

--------------------------------

## July 20, 2016

Finished adding messenger service to the signup component.  Server errors are render the same as form validation.

Began roughing out the quix component, which holds the image, the question-list component, and the question-input component.

--------------------------------

## July 19

Updated to the new Angular forms API.  Added the providers to the bootstrap file, and imported to the form components.  Reworked the code for best practices.

Migrated the signin template form to a model driven form, to more easily deal with server responses.

Created a messenger service for error, warning, and info.  Implemented it in the question-input and signin component.  75% implemented in the signup component.

Updated unit test in targeted components.

--------------------------------

## July 18

Tried to implement an app wide error, warning, info, directive, but there was too much variation to consolidate.  Added error messages to one of the the forms, and I'll see if I can consolidate it.

Began update the app name and remotes, package.json, file structure, heroku remote, and github origin.

--------------------------------

## July 17

Incorporated the newest version of the router: app.routes.ts, which is loaded into the main.ts file.  Then accessed the routerLink and routerOutlet via Router_DIRCTIVES in the app.component and the navigation.component.  

Added location hash strategy.

Started on the questions forms, for game masters to upload one question at a time for sessions. Wrote a function to check a single possible answer against an array of possible acceptable answers.

Added a FAQ to explain the state of the application.

--------------------------------

## July 16

Added validators to the signin component.

Added a div to 'block' forms while they are being submitted.

Continued to try and implement the FileStack filepicker.  The filepicker-js library is on the window object, but I can't access any of the functionality.

Explored the window object some, and how to add properties without the Typescript compilation errors.

--------------------------------

## July 14

Attemped to import FileStack's npm module for uploading and storing photo.  The widgets work outside the Angular2 app, but not inside a component.  I can load the library into a component, but I can't get the library to wrap the html template.

https://www.npmjs.com/package/filepicker-js

--------------------------------

## July 13

Added a photo uploader using multer. 
https://www.npmjs.com/package/multer

--------------------------------

## July 12

Added Dropdown component using css and Angular2, moved all the auth into the component.  Use ngIf to check is there is a user signed in and which menus are being displayed.  Used ElementRef to determine if someone is clicking inside or out of the dropdowns.

Basic testing for AuthService and User components.

--------------------------------

## July 11

User signup, signin, and logout.  Including: Angular components, AuthService, and express routes.  Added password security with scrypt-js.  Save token to local storage.

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
