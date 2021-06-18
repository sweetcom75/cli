# @sweetcom/cli : sweet 

[![pipeline](http://git.hassani-lab.fr/sweetcom/cli/badges/master/pipeline.svg)](http://git.sweetcom75.fr/sweetcom/cli) 
[![GitHub license](https://img.shields.io/badge/licence-sweet-red.svg)](http://git.sweetcom75.fr/sweetcom/cli) 
[![npm version](https://img.shields.io/npm/v/@sweetcom/cli?style=flat)](https://www.npmjs.com/package/@sweetcom/cli)



 
is a command line cli that will run build and init SweetApps 
with sw command line you can create, build, start(dev mode) or test your app

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

Start your application from default template

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
if your using a mac make sure xcode is installed run
~~~sh
$ gcc -v 
#if it propose to you to install xcode do it
~~~
