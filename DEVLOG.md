## July 8, 2016

Experimented with how ng build creates the dist folder.  For the time being, the express server file has to be directly in the src file.  When I put it in another child folder, like src/server/app.js, the complier throws syntax errors, even though the proper file is being sent.

Server sub-folder seem to work fine for models and routes.


## July 7, 2016

Set up angular-cli and simple express server.

Run the server in the terminal $ node dist/app 
