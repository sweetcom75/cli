# @sweetcom/cli : sweet 
[![Discord](https://img.shields.io/discord/539267338193600532?label=Join&logo=discord)](https://discord.gg/kH9gXA)
[![Build Status](http://ci.sweetcom75.fr/buildStatus/icon?job=NodeApps%2Fsweetcom.cli%2Fmaster)](http://cli.sweetcom75.fr/)
[![sweetcom75 license](http://ci.sweetcom75.fr/buildStatus/icon?subject=License&status=Sweetcom75&color=orange)](http://cli.sweetcom75.fr/)
[![npm version](https://img.shields.io/npm/v/@sweetcom/cli?color=blue)](https://www.npmjs.com/package/@sweetcom/cli)

Is a command line cli that will run build and init SweetApps 

`sweet` command helps make the creation, development and build react web applications faster and easier.
Feel free to try it, and if you do so, please give us your feed back [@sweet/cli](http://cli.sweetcom75.fr/)

with a single terminal application you'll be able to : 
* **create** an application from a very simple template including react and react-dom as a dependency
* **start** this application in development mode with the `hot reload module` active this way you'll be faster writing your code
* **build** a minimized version for production easy and simple to deploy

 
### Basic usage:
To install the command line cli run : 

~~~
npm install -g @sweetcom/cli
~~~

Start your application and run it in a dev server
~~~
sweet init Myapp
cd Myapp
sweet start
~~~

Build your app
~~~
sweet build
~~~


### MACOSX:
if your using a mac make sure xcode gcc dependency is installed before installing @sweetcom/cli : 
~~~sh
$ gcc -v 
#if it propose to you to install xcode module do it, elsewhere you will get a version number running the gcc -v 
~~~

For more information please visit [@sweet/cli](http://cli.sweetcom75.fr/) official website.