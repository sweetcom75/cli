#!/usr/bin/env node
!function(e){var o={};function t(i){if(o[i])return o[i].exports;var s=o[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=o,t.d=function(e,o,i){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var s in e)t.d(i,s,function(o){return e[o]}.bind(null,s));return i},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=6)}([function(e,o){e.exports=require("path")},function(e,o){e.exports=require("fs")},function(e,o){e.exports=require("@sweetcom/colors")},function(e,o,t){const i=t(0),s=t(16),r=t(17);e.exports=class{constructor(){this.entry=[],this.plugins=[],this.module={rules:[]},this.output={path:"",publicPath:"",filename:"[name].[hash].sweet.js"},this.setDevelopmentMode()}setDevelopmentMode(){this.mode="development"}setProductionMode(){this.mode="production"}addPlugins(e){this.plugins.push(e)}addLoaderRule(e){this.module.rules.push(e)}addEntry(e){this.entry.push(e)}setOutputPath(e){this.output.path=e}setTarget(e){this.target=e}setOutputPublicPath(e){this.output.publicPath=e}setOutputfilename(e){this.output.filename=e}getJsxLoaderRule(e){return{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:i.join(e,"babel-loader"),options:{cacheDirectory:!1,presets:[i.join(e,"@babel/preset-env"),i.join(e,"@babel/preset-react")],plugins:[i.join(e,"@babel/plugin-proposal-class-properties")]}}}getEslintLoaderRule(){return{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:"eslint-loader",options:t(18)}}getStaticFilesLoader(e){return{test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/,/\.svg$/,/\.json$/,/\.ico$/],loader:i.join(e,"file-loader")}}getFontsLoaderRule(e){return{test:/\.(woff|woff2|eot|ttf|otf)$/,use:[i.join(e,"file-loader")]}}getcssLoaderRule(e){return{test:/\.(sa|sc|c)ss$/,use:[i.join(e,"style-loader"),i.join(e,"css-loader"),i.join(e,"sass-loader")]}}getProdcssLoaderRule(e){return{test:/\.(sa|sc|c)ss$/,use:[r.loader,i.join(e,"css-loader"),i.join(e,"sass-loader")]}}getCssExtractionPlugin(){return new r({filename:"[name].[hash].sweet.css"})}getProdCssExtractionPlugin(){return new r({filename:"sweet.css"})}getHtmlWebpackPlugin(e){return new s({inject:!0,templateParameters:{PUBLIC_URL:""},title:"Sweet App",template:e||"./public/index.html"})}}},function(e,o){e.exports=require("webpack")},function(e,o){e.exports=require("child_process")},function(e,o,t){"use strict";new(t(7))},function(e,o,t){const i=t(1),s=t(0);t(2);const r=t(8);e.exports=class{constructor(){this.rootCliDir=process.mainModule.path,this.params=new r(process.cwd(),this.rootCliDir),this.instruction=this.params.getInstruction(),this.package=JSON.parse(i.readFileSync(s.join(this.rootCliDir,"package.json"),"utf8")),this.params.package=this.package,this.run()}run(){switch(this.instruction){case"init":case"new":this.init();break;case"start":case"run":this.start();break;case"build":case"prod":this.build();break;case"buildNpm":case"buildCSS":this.buildNpm();break;case"test":console.log("[@Sweetcom/cli]".color(63)+" We are sorry ! Tests are not implemented yet".color(39));break;case"doc":case"docs":case"documentation":this.doc();break;case"v":case"-v":case"--v":case"V":case"-V":case"--V":case"Version":case"-Version":case"--Version":case"version":case"-version":case"--version":console.log("[@Sweetcom/cli]".color(63)+" version : ".color(247)+this.package.version.color(39)),console.log("[@Sweetcom/cli]".color(63)+" author : ".color(247)+"hassani ayoub <hassani.ayoub@gmail.com>".color(39)),console.log("[@Sweetcom/cli]".color(63)+" Please visit ".color(247)+"[http://cli.sweetcom75.fr]".color(62)+" if you feel the need to know more about sweetcom/cli".color(39));break;default:console.log("[@Sweetcom/cli]".color(63)+" HELP ...".color(39)),console.log("[@Sweetcom/cli]".color(63)+" Please visit ".color(39)+"[http://cli.sweetcom75.fr]".color(62)+" To get all the help you need".color(39))}}init(){console.log("[@Sweetcom/cli]".color(63)+" Initializing ...".color(39));new(t(9))(this.params).run()}start(){console.log("[@Sweetcom/cli]".color(63)+"  Starting ...".color(39));new(t(15))(this.params).run()}build(){console.log("[@Sweetcom/cli]".color(63)+"  Building ...".color(39));new(t(20))(this.params).run()}buildNpm(){console.log("[@Sweetcom/cli]".color(63)+" Building For NPM...".color(39));new(t(22))(this.params).run()}doc(){console.log("[@Sweetcom/cli]".color(63)+" Generating documentation ...".color(39));new(t(24))(this.params).run()}}},function(e,o){e.exports=class{constructor(e,o){this.workingDir=e,this.CliDir=o,this._args=process.argv.slice(2)}getWorkingDir(){return this.workingDir}getCliDir(){return this.CliDir}getInstruction(){return this._args[0]}getArgsPosition(e){for(let o=0;o<=e.length;o++){let t=this._args.findIndex(t=>t===e[o]);if(t>-1)return t}return-1}getParamAsString(e,o){let t=this.getArgsPosition(e);return-1==t?o:this._args[t+1]}getParamAsNumber(e,o){let t=this.getArgsPosition(e);return-1==t?o:parseInt(this._args[t+1])}getParamAsBoolean(e){return this.getArgsPosition(e)>-1}}},function(e,o,t){const i=t(0),s=t(1),r=t(10),n=t(11),c=t(12),a=(t(2),t(14));e.exports=class extends c{constructor(e){super(),this.params=e,this.appname=this.params.getParamAsString(["init"]),this.workDir=this.params.getWorkingDir(),this.cliDir=this.params.getCliDir(),this.verbose=this.params.getParamAsBoolean(["-v","--v","-verbose","--verbose"],!0),this.tplDir=this.getTemplateDir(),this.appDir=i.join(this.workDir,this.appname)}getTemplateDir(){let e=["base","sweet"];if(this.template=this.params.getParamAsString(["-t","--t","-template","--template"],"base"),e.includes(this.template))return i.join(this.cliDir,"template",this.template);throw new Error("Template name error posibilities : ["+e.join(" - ")+"]")}projectDirectoryExistsWarning(){console.log("[@Sweetcom/cli]".color(63)+' Warning : The Directory "'.color(220)+this.appname.color(220)+'" allready exists !'.color(220)),console.log("[@Sweetcom/cli]".color(63)+" Please chose from below : ".color(220)),console.log("[@Sweetcom/cli]".color(63)+"  1 :".color(220)+" Do nothing and exit.".color(39)),console.log("[@Sweetcom/cli]".color(63)+"  2 :".color(220)+' Delete existing folder and initialize app in "'.color(39)+this.appname.color(220)+'" folder anyway !!!!'.color(39)),console.log("[@Sweetcom/cli]".color(63)+"  3 :".color(220)+" Chose an other name for your app.".color(39))}checkifProjectExists(){return new Promise((e,o)=>{s.exists(this.appDir,t=>{t?(this.projectDirectoryExistsWarning(),this.question("1 to exit, 2 to erase the old app or 3 to chose a new name ? ").then(t=>{"1"==t?(console.log("[@Sweetcom/cli]".color(63)+"  You chose to do nothing ".color(39)),console.log("[@Sweetcom/cli]".color(63)+"  Doing nothing  .... ".color(39)+"\r\n[@Sweetcom/cli]".color(63)+"  Good Day to you ;) ".color(39)),process.exit(0)):"3"==t?(console.log("[@Sweetcom/cli]".color(63)+"  You chose to rename your application ".color(39)),this.question("Please enter the new name for your application ").then(o=>{this.appname=o,this.appDir=i.join(this.workDir,this.appname),e(o)})):"2"==t?(console.log("[@Sweetcom/cli]".color(63)+"  You chose to delete the old existing folder ".color(39)),n(this.appDir).then(()=>{console.log("[@Sweetcom/cli]".color(63)+"  Folder deleted correctly ".color(39)),e(t)}).catch(e=>{o(e)})):(console.log("[@Sweetcom/cli]".color(63)+" The only available choices are 1, 2 or 3 ".color(39)),console.log("[@Sweetcom/cli]".color(63)+"  Savest choice is doing nothing ".color(39)),console.log("[@Sweetcom/cli]".color(63)+"  Doing nothing  .... ".color(39)+"\r\n[@Sweetcom/cli]".color(63)+" Good Day to you ;) ".color(39)),process.exit(0))})):e()})})}run(){this.checkifProjectExists().then(e=>{r(this.tplDir,this.appDir,e=>{if(e)return console.error(e),process.exit(0);let o=new a(i.join(this.appDir,"package.json"));o.package.name=this.appname,o.writeFile();let t=new a(i.join(this.appDir,"public/manifest.json"));t.package.short_name=this.appname,t.package.name=this.appname,t.writeFile(),console.log("[@Sweetcom/cli]".color(63)+" Running npm install ...".color(39)),this.exec("npm",["install"],this.appDir).then(()=>{this.question("Would you like to start your application ( yes if empty answer )?").then(e=>{"YES"!=e.toUpperCase()&&"Y"!=e.toUpperCase()&&""!==e||this.exec("sweet",["start"],this.appDir).then(()=>{}).catch(e=>(console.error(e),process.exit(0)))})}).catch(e=>(console.error(e),process.exit(0)))})}).catch(e=>{throw e})}}},function(e,o,t){const i=t(1),s=t(0);e.exports=function(e,o,t,r){var n=r;r||(n=t,t={});var c=process.cwd(),a=s.resolve(c,e),l=s.resolve(c,o),u=t.filter,p=t.rename,h=t.transform,d=!1!==t.clobber,g=t.modified,m=t.dereference,f=null,w=0,b=0,j=0,x=t.limit||16;function k(e){if(w++,u)if(u instanceof RegExp){if(!u.test(e))return R(!0)}else if("function"==typeof u&&!u(e))return R(!0);return function e(o){var t=m?i.stat:i.lstat;if(j>=x)return setImmediate((function(){e(o)}));j++,t(o,(function(e,t){var r,n,u={};return e?C(e):(u.name=o,u.mode=t.mode,u.mtime=t.mtime,u.atime=t.atime,t.isDirectory()?void v(n=(r=u).name.replace(a,l),(function(e){if(e)return function(e,o){i.mkdir(o,e.mode,(function(o){if(o)return C(o);P(e.name)}))}(r,n);P(r.name)})):t.isFile()?function(e){var o=e.name.replace(a,l);p&&(o=p(o));v(o,(function(t){return t?D(e,o):(d&&y(o,(function(){D(e,o)})),g?void(m?i.stat:i.lstat)(o,(function(t,i){if(!(e.mtime.getTime()>i.mtime.getTime()))return R();D(e,o)})):R())}))}(u):t.isSymbolicLink()?function(e){var o=e.replace(a,l);i.readlink(e,(function(e,t){if(e)return C(e);!function(e,o){m&&(e=s.resolve(c,e));v(o,(function(t){if(t)return S(e,o);i.readlink(o,(function(t,i){return t?C(t):(m&&(i=s.resolve(c,i)),i===e?R():y(o,(function(){S(e,o)})))}))}))}(t,o)}))}(o):void 0)}))}(e)}function D(e,o){var t=i.createReadStream(e.name),s=i.createWriteStream(o,{mode:e.mode});t.on("error",C),s.on("error",C),h?h(t,s,e):s.on("open",(function(){t.pipe(s)})),s.once("finish",(function(){g?(i.utimesSync(o,e.atime,e.mtime),R()):R()}))}function y(e,o){i.unlink(e,(function(e){return e?C(e):o()}))}function P(e){i.readdir(e,(function(o,t){return o?C(o):(t.forEach((function(o){k(s.join(e,o))})),R())}))}function S(e,o){i.symlink(e,o,(function(e){return e?C(e):R()}))}function v(e,o){i.lstat(e,(function(e){return e&&"ENOENT"===e.code?o(!0):o(!1)}))}function C(e){return t.stopOnError?n(e):(!f&&t.errs?f=i.createWriteStream(t.errs):f||(f=[]),void 0===f.write?f.push(e):f.write(e.stack+"\n\n"),R())}function R(e){if(e||j--,b++,w===b&&0===j&&void 0!==n)return n(f||null)}x=x<1?1:x>512?512:x,k(a)}},function(e,o,t){const i=t(1),s=t(0);function r(e){return new Promise((function(o,t){i.access(e,(function(n){n&&t(n),i.readdir(e,{withFileTypes:!0},(function(n,c){if(n&&t(n),0==c.length)return o((a=e,new Promise((e,o)=>{i.rmdir(a,(function(t){t&&o(t),e(a)}))})));var a;c.map((function(t){return t.isDirectory()?o(r(s.join(e,t.name))):o((n=s.join(e,t.name),new Promise((e,o)=>{i.unlink(n,(function(t){t&&o(t),e()}))})));var n}))}))}))}))}e.exports=r},function(e,o,t){t(2);e.exports=class{constructor(){this.cp=t(5),this.readLine=t(13)}question(e){return new Promise((o,t)=>{const i=this.readLine.createInterface({input:process.stdin,output:process.stderr});i.question("[@Sweetcom/cli]".color(63)+" Question : ".color(220)+e.color(220)+"\n[@Sweetcom/cli]".color(63)+" Answer  : ".color(220),e=>{i.close(),o(e)})})}exec(e,o,t){return new Promise((i,s)=>{const r=this.cp.spawn(e,o,{stdio:"inherit",shell:!0,cwd:t||process.cwd()});r.on("error",e=>{s(e)}),r.on("exit",e=>{0===e?i():s()})})}}},function(e,o){e.exports=require("readline")},function(e,o,t){const i=t(1);e.exports=class{constructor(e,o){let t=o||!0;this.fileName=e,t&&this.load()}load(){this.package=JSON.parse(i.readFileSync(this.fileName,"utf8"))}updateVersion(){}writeFile(){i.writeFileSync(this.fileName,JSON.stringify(this.package,void 0,4))}}},function(e,o,t){const i=t(0),s=t(1),r=t(3),n=t(4),c=t(19);e.exports=class{constructor(e){this.params=e,this.open=this.params.getParamAsBoolean(["-o","--open"]),this.port=this.params.getParamAsNumber(["-p","--port"],8080),this.host="localhost",this.config=new r,this.package=JSON.parse(s.readFileSync(i.join(this.params.getWorkingDir(),"package.json"),"utf8")),this.configureBaseApp(),this.addReactConfig()}addReactConfig(){this.config.addLoaderRule(this.config.getJsxLoaderRule(i.join(this.params.getCliDir(),"node_modules")))}configureBaseApp(){this.watch=!0,this.devtool="inline-source-map",this.config.resolve={modules:[i.join(this.params.getCliDir(),"node_modules"),i.join(this.params.getWorkingDir(),"node_modules")]},this.config.addEntry(i.join(this.params.getCliDir(),"node_modules","webpack-dev-server/client")),this.config.addEntry(i.join(this.params.getWorkingDir(),"src","index.js")),this.config.setOutputPath(i.join(this.params.getWorkingDir(),"public")),this.config.setOutputPublicPath("./"),this.config.addLoaderRule(this.config.getcssLoaderRule(i.join(this.params.getCliDir(),"node_modules"))),this.config.addLoaderRule(this.config.getStaticFilesLoader(i.join(this.params.getCliDir(),"node_modules"))),this.config.addLoaderRule(this.config.getFontsLoaderRule(i.join(this.params.getCliDir(),"node_modules"))),this.config.addPlugins(this.config.getCssExtractionPlugin()),this.config.addPlugins(this.config.getHtmlWebpackPlugin(i.join(this.params.getWorkingDir(),"public","index.html"))),this.config.addPlugins(new n.HotModuleReplacementPlugin)}run(){let e=n(this.config),o={stats:{hash:!1,builtAt:!1,entrypoints:!1,performance:!1,assetsSort:"!size",modules:!1,modulesSort:"size",chunks:!1,colors:!0},compress:!0,contentBase:i.join(this.params.getWorkingDir(),"public"),inline:!0,watchContentBase:!0,open:!0,hot:!0,https:!1,public:"http://"+this.host+":"+this.port,publicPath:"/",overlay:{warnings:!0,errors:!0},host:this.host,port:this.port,historyApiFallback:!0};c.addDevServerEntrypoints(this.config,o,void 0),new c(e,o).listen(this.port,this.host,()=>{})}}},function(e,o){e.exports=require("html-webpack-plugin")},function(e,o){e.exports=require("mini-css-extract-plugin")},function(e,o){e.exports={parser:"babel-eslint",rules:{"react/jsx-uses-react":1,"react/jsx-uses-vars":1,"react/react-in-jsx-scope":1,"react/jsx-tag-spacing":[0,{beforeSelfClosing:"always"}],curly:[1],"linebreak-style":[1,"unix"],semi:[1,"always"],"comma-dangle":[0],"no-unused-vars":[1,{vars:"all",args:"none",ignoreRestSiblings:!0}],"no-console":[0],"object-curly-spacing":[1,"always"],"keyword-spacing":["error"]},env:{es6:!0,browser:!0,node:!0},extends:"eslint:recommended",ecmaFeatures:{modules:!0,jsx:!0,experimentalObjectRestSpread:!0},plugins:["jsx-a11y","react"]}},function(e,o){e.exports=require("webpack-dev-server")},function(e,o,t){const i=t(0),s=t(1),r=t(3),n=t(4),c=t(21);e.exports=class{constructor(e){this.params=e,this.config=new r,this.package=JSON.parse(s.readFileSync(i.join(this.params.getWorkingDir(),"package.json"),"utf8")),this.configureBaseApp(),this.addReactConfig()}addReactConfig(){this.config.addLoaderRule(this.config.getJsxLoaderRule(i.join(this.params.getCliDir(),"node_modules")))}compilerCallback(e,o){if(e)throw e;const t=o.toJson();if(o.hasErrors())throw new Error(t.errors);o.hasWarnings()&&console.warn(t.warnings),console.log(o.toString({hash:!1,builtAt:!1,entrypoints:!1,performance:!1,assetsSort:"!size",modules:!1,modulesSort:"size",chunks:!1,colors:!0}))}configureBaseApp(){this.watch=!0,this.devtool="inline-source-map",this.config.resolve={modules:[i.join(this.params.getCliDir(),"node_modules"),i.join(this.params.getWorkingDir(),"node_modules")]},this.config.setProductionMode(),this.config.addEntry(i.join(this.params.getWorkingDir(),"src","index.js")),this.config.setOutputPath(i.join(this.params.getWorkingDir(),"build")),this.config.setOutputPublicPath("./"),this.config.addLoaderRule(this.config.getProdcssLoaderRule(i.join(this.params.getCliDir(),"node_modules"))),this.config.addLoaderRule(this.config.getStaticFilesLoader(i.join(this.params.getCliDir(),"node_modules"))),this.config.addLoaderRule(this.config.getFontsLoaderRule(i.join(this.params.getCliDir(),"node_modules"))),this.config.addPlugins(new c([{from:"**/*",to:"assets",force:!0,context:i.join(this.params.getWorkingDir(),"public/assets")},{from:"favicon.ico",to:"favicon.ico",force:!0,context:i.join(this.params.getWorkingDir(),"public")},{from:"manifest.json",to:"manifest.json",force:!0,context:i.join(this.params.getWorkingDir(),"public")}],{})),this.config.addPlugins(this.config.getCssExtractionPlugin()),this.config.addPlugins(this.config.getHtmlWebpackPlugin(i.join(this.params.getWorkingDir(),"public","index.html")))}run(){n(this.config,this.compilerCallback.bind(this))}}},function(e,o){e.exports=require("copy-webpack-plugin")},function(e,o,t){const i=t(3),s=(t(23),t(4)),r=t(0);e.exports=class{constructor(e){this.params=e,this.config=new i,this.webpackConfig()}webpackConfig(){this.config.resolve={modules:[r.join(this.params.getCliDir(),"node_modules"),r.join(this.params.getWorkingDir(),"node_modules")]},this.config.setProductionMode(),this.config.addEntry(this.params._args[1]),this.config.target="web",this.config.setOutputPath(r.join(this.params.getWorkingDir(),"npm")),this.config.setOutputPublicPath("./"),this.config.output.filename="index.js",this.config.output.libraryExport="default",this.config.output.libraryTarget="commonjs",this.config.addLoaderRule(this.config.getJsxLoaderRule(r.join(this.params.getCliDir(),"node_modules"))),this.config.addLoaderRule(this.config.getProdcssLoaderRule(r.join(this.params.getCliDir(),"node_modules"))),this.config.addLoaderRule(this.config.getStaticFilesLoader(r.join(this.params.getCliDir(),"node_modules"))),this.config.addLoaderRule(this.config.getFontsLoaderRule(r.join(this.params.getCliDir(),"node_modules"))),this.config.addPlugins(this.config.getProdCssExtractionPlugin())}compilerCallback(e,o){if(e)throw e;console.log(o.toString({chunks:!1,colors:!0}))}run(){s(this.config,this.compilerCallback.bind(this))}}},function(e,o){e.exports=require("webpack-node-externals")},function(e,o,t){const{exec:i}=t(5);e.exports=class{constructor(e){this.params=e}run(){i("node "+this.params.CliDir+"\\node_modules\\jsdoc\\jsdoc.js src/ -d doc",(e,o,t)=>{e?console.error("exec error: "+e):(console.log("stdout: "+o),console.error("stderr: "+t))})}}}]);