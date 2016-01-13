# Rate Topic App
I created this lil app to try a couple new libraries out there for the react js echo-system.

I had already been programming in React for a year now so nothing new there except good old es6 magic.

React router was also a little-bit of an old hat but good to implement with redux.

Redux and React Redux are brand new to me and essentially are my replacement for flux.

Redux simple router is in there even though I have not found a good use for it yet in this small app. 

## Goals

I have build a web implementation on my react app and my next and most desired goal is to write react native apps that use the same reducers and actions. If I can show a reuse of business logic that would be a great gain to write cross-platform apps.

## What does the app do?

Essentially the app renders a list of topics. You can add topics and rate them. Coming soon delete functionality.

## Development

In order to develop or test the first step is to install all dependencies. To install all required npm modules run: 
```shell
npm install
```
To build a bundle from this app run:
```shell
npm run build
```
### Web
To run the web implementation of the application run:
```shell
npm start
```
The application will start running at localhost:8080. 

To support live reload for the app you need to install on chrome [`livereload extension`](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
 
This extension will keep track of changes to the app thru a socket and reload the app when changes occur.

You need to enable the plugin by clicking on it once.

### Native - IOS

Coming soon

### Native - Android

Coming soon