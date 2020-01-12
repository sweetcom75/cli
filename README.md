# @sweetcom/cli : sweet 
[![Discord](https://img.shields.io/discord/539267338193600532?label=Join&logo=discord)](https://discord.gg/kH9gXA)  [![Build Status](http://ci.sweetcom75.fr/buildStatus/icon?job=sweetcom.cli%2Fmaster)](http://cli.sweetcom75.fr/) [![GitHub license](https://img.shields.io/badge/licence-sweet-red.svg)](http://cli.sweetcom75.fr/)  [![npm version](https://img.shields.io/npm/v/@sweetcom/cli?style=flat)](https://www.npmjs.com/package/@sweetcom/cli)



 
Is a command line cli that will run build and init SweetApps 

**sweet** command make the creation developpement and build react web applications faster and easier

### dependencies : 
 * nodejs >= 11
 * List of Dependencies 
    * webpack
    * webpack-dev-server
    * webpack-node-externals
    * copy-webpack-plugin
    * html-webpack-plugin
    * mini-css-extract-plugin
    * node-sass
    * sass-loader
    * style-loader
    * css-loader
    * file-loader
    * babel-loader
    * @babel/core
    * @babel/plugin-proposal-class-properties
    * @babel/preset-env
    * @babel/preset-react

 
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
if your using a mac make sure xcode is installed before installing @sweetcom/cli : 
~~~sh
$ gcc -v 
#if it propose to you to install xcode do it
~~~

