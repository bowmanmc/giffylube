# GiffyLube

The app will allow users to apply brightness and contrast adjustments to gifs. The 
real reason for the app is to try out some new technologies.


## NPM as a build tool

No more bower or gulp. Simply run "npm install" and then "npm run start" to get up
and running locally. It does everything our gulp/bower build does and more.


## ES6 and WebPack

This app uses ES6 style modules and imports. So far, it's pretty light since we're
using angular for most things. That said, things end up being more modular because
instead of using the angular global variable, the application is created and then
passed into each of the modules. This will make it (potentially) make it easier
to share components between projects. It comes at the expense of having to declare
exported components in an index.js in each folder.

## Thoughts? Questions?

Let me know what you think. Especially interested in hearing what problems 
Windows users run into.
