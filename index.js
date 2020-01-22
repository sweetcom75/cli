#!/usr/bin/env node
!function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("html-webpack-plugin")},function(e,t){e.exports=require("clean-webpack-plugin")},function(e,t,i){e.exports=class{constructor(){this.cp=i(20)}exec(e,t,i){return new Promise((s,o)=>{const r=this.cp.spawn(e,t,{stdio:"inherit",shell:!0,cwd:i||process.cwd()});r.on("error",e=>{o(e)}),r.on("exit",e=>{0===e?s():o(e)})})}}},function(e,t){e.exports=class extends Error{}},function(e,t,i){const s=i(5),o=i(6);e.exports=class{constructor(e,t){this.__scriptname=e,this.m=t,this.l=this.m.logger,this.params=this.m.paramsCollector,this.cliDir=this.m.cliDir,this.workDir=this.m.workDir,this.verbose=this.m.verbose,this.subprocess=new s}catch(e){}verboselog(e){this.verbose&&this.l.warn("["+this.__scriptname+"] "+e)}compilerCallback(e){const t=e.toJson();if(e.hasErrors()){for(let e=0;e<t.errors.length;e++){const i=t.errors[e];this.l.error(i)}process.exit(-1)}if(e.hasWarnings()&&this.verbose)for(let e=0;e<t.warnings.length;e++){const i=t.warnings[e].split("\n");for(let e=0;e<i.length;e++)this.l.warn(i[e])}for(let e=0;e<t.assets.length;e++){const i=t.assets[e];this.l.check(i.name+"\n[1A[40C"+this.l.__c(parseInt(i.size/1024*100)/100+" (ko)",132))}this.l.info("Bundling finishes sucesssfuly in  "+t.time+" (ms) : ")}run(){throw this.l.error("["+this.__scriptname+"] implementation error : Script.run() but method not found "),new o("Please implement run method to your script")}}},function(e,t,i){const s=i(0);e.exports=class{constructor(e){this.entry=[s.join(e.workDir,"src/index.js")],this.mode="development",this.output={path:s.join(e.workDir,"dist")},this.module={},this.resolve={modules:[s.join(e.workDir,"node_modules"),s.join(e.cliDir,"node_modules"),"node_modules"],extensions:[".js",".json",".jsx",".css",".scss"]},this.performance={hints:"warning",maxAssetSize:2e5,maxEntrypointSize:4e5,assetFilter:function(e){return e.endsWith(".scss")||e.endsWith(".css")||e.endsWith(".js")}},this.devtool="source-map",this.context=e.workDir,this.target="web",this.stats="errors-only",this.plugins=[]}}},function(e,t){e.exports=require("webpack-node-externals")},function(e,t,i){"use strict";new(i(11))},function(e,t,i){const s=i(1),o=i(0),r=i(12),n=i(15);e.exports=class{constructor(){this.cliDir=o.dirname(process.mainModule.filename),this.cliPackage=JSON.parse(this.getCliResourceContent("package.json")),this.workDir=process.cwd(),this.pColloct=new n,this.l=new r,this.verbose=this.pColloct.getParamAsBoolean(["-verbose","--verbose"],!1),this.cliModules={paramsCollector:this.pColloct,logger:this.l,cliDir:this.cliDir,workDir:this.workDir,args:process.argv.slice(2),verbose:this.verbose},this.intro(),this.run()}run(){switch(this.cliModules.paramsCollector.getInstruction()){case"init":this.init();break;case"start":this.start();break;case"build":this.build();break;case"help":case"-help":case"--help":case"h":case"-h":case"--h":this.help();break;default:this.noscript(),this.help()}}init(){this.l.info("version :"+this.cliPackage.version+" Running initialization script ....."),new(i(16))(this.cliModules).run()}start(){this.l.info("version :"+this.cliPackage.version+" Running starter script ....."),new(i(21))(this.cliModules).run()}build(){this.l.info("version :"+this.cliPackage.version+" Running builder script ....."),new(i(24))(this.cliModules).run()}noscript(){this.cliModules.paramsCollector.getInstruction()?this.l.info(this.cliModules.paramsCollector.getInstruction()+" Is sot a sub commande of @sweetcom/cli <init|start|build>"):this.l.info("Need a sub commande of @sweetcom/cli <init|start|build>")}help(){this.l.info("HELP ..."),this.l.info("Please visit [http://cli.sweetcom75.fr]  To get all the help you need")}getCliResourceContent(e){return s.readFileSync(o.join(this.cliDir,e),"utf-8")}intro(){console.log(this.getCliResourceContent("txt.txt"))}debug(){this.l.info("Version : "+this.cliPackage.version),this.l.info("cli : "+this.cliDir),this.l.info("App to process : "+this.workdir)}}},function(e,t,i){var s=i(13);const o="Hyper"===process.env.TERM_PROGRAM,r="win32"===process.platform,n="linux"===process.platform,l={ballotDisabled:"☒",ballotOff:"☐",ballotOn:"☑",bullet:"•",bulletWhite:"◦",fullBlock:"█",heart:"❤",identicalTo:"≡",line:"─",mark:"※",middot:"·",minus:"－",multiplication:"×",obelus:"÷",pencilDownRight:"✎",pencilRight:"✏",pencilUpRight:"✐",percent:"%",pilcrow2:"❡",pilcrow:"¶",plusMinus:"±",section:"§",starsOff:"☆",starsOn:"★",upDownArrow:"↕"},a=Object.assign({},l,{check:"√",cross:"×",ellipsisLarge:"...",ellipsis:"...",info:"i",question:"?",questionSmall:"?",pointer:">",pointerSmall:"»",radioOff:"( )",radioOn:"(*)",warning:"‼"}),c=Object.assign({},l,{ballotCross:"✘",check:"✔",cross:"✖",ellipsisLarge:"⋯",ellipsis:"…",info:"ℹ",question:"?",questionFull:"？",questionSmall:"﹖",pointer:n?"▸":"❯",pointerSmall:n?"‣":"›",radioOff:"◯",radioOn:"◉",warning:"⚠"});e.exports=class{constructor(){this.readLine=i(14),this.symbols={ok:"✓",err:"✖",info:"ℹ",warn:"!",q:"?"},this.symbols=r&&!o?a:c,this.colors={info:30,check:49,warn:130,error:124,question:33,prefix:{check:49,info:32,warn:130,err:124,question:97}},this.prefix={check:this.symbols.check+" [sw/cli] ",info:this.symbols.info+" [sw/cli] ",warn:this.symbols.warning+" [sw/cli] ",err:this.symbols.ballotCross+" [sw/cli] ",q:this.symbols.question+" [sw/cli] "}}__c(e,t){return s.color(e,t)}log(e,t,i,s,o){console.log(this.__c(i,s)+(o||" ")+this.__c(e,t))}info(e){this.log(e,this.colors.info,this.prefix.info,this.colors.prefix.info)}check(e){this.log(e,this.colors.info,this.prefix.check,this.colors.prefix.check)}warn(e){this.log(e,this.colors.warn,this.prefix.warn,this.colors.prefix.warn)}error(e){this.log(e,this.colors.error,this.prefix.err,this.colors.prefix.err)}asck(e){let t=this;return new Promise((i,s)=>{const o=this.readLine.createInterface({input:process.stdin,output:process.stderr});o.question(this.__c(t.prefix.q,this.colors.prefix.question)+" "+this.__c(e,this.colors.prefix.question)+"\n\r  Answer : ",e=>{o.close(),i(e)})})}}},function(e,t){e.exports=require("@sweetcom/colors")},function(e,t){e.exports=require("readline")},function(e,t){e.exports=class{constructor(){this._args=process.argv.slice(2)}getInstruction(){return this._args[0]}getArgsPosition(e){for(let t=0;t<=e.length;t++){let i=this._args.findIndex(i=>i===e[t]);if(i>-1)return i}return-1}getParamAsString(e,t){let i=this.getArgsPosition(e);return-1==i?t:this._args[i+1]}getParamAsNumber(e,t){let i=this.getArgsPosition(e);return-1==i?t:parseInt(this._args[i+1])}getParamAsBoolean(e,t){let i=this.getArgsPosition(e);return-1==i?t||!1:i>-1}}},function(e,t,i){const s=i(0),o=i(1),r=i(17),n=i(18),l=i(19),a=i(5),c=i(6);e.exports=class{constructor(e){this.m=e,this.l=this.m.logger,this.log("Detecting envirennement ..."),this.params=this.m.paramsCollector,this.cliDir=this.m.cliDir,this.workDir=this.m.workDir,this.verbose=this.m.verbose,this.appname=this.params.getParamAsString(["init"]),this.templateDir=this.getTemplateDir(),this.NewAppDir=s.join(this.workDir,this.appname),this.subprocess=new a}getTemplateDir(){let e=["base","sweet"];if(this.template=this.params.getParamAsString(["-t","--t","-template","--template"],"base"),-1!=e.indexOf(this.template))return s.join(this.cliDir,"template",this.template);throw new Error("Template name error posibilities : ["+e.join(" - ")+"]")}log(e){this.verbose&&this.l.check("[INITIALISER] "+e)}verbose(e){this.verbose&&this.l.check("[INITIALISER] "+e)}validateCreationParams(){return this.log("Validating Environnement before start copying template application"),new Promise((e,t)=>{o.exists(this.templateDir,(i,r)=>{r&&(this.l.error(r.message),t(r)),i||(this.l.error("Template Folder dosent exists please run npm installl -g @sweetcom/clo to resolve the problem"),t(new Error("Template Folder dosent exists"))),o.exists(this.NewAppDir,(i,o)=>{o&&(this.l.error(o.message),t(o)),i?(this.l.warn("Destination directory Already Exists you have a choice to make ;) !!!"),this.l.info("Suggestions : "),this.l.info(" - 1 - Do nothing, and you will exit without any changes ."),this.l.info(" - 2 - Delete old directory '"+this.appname+"' and replace it with a new one ."),this.l.info(" - <newAppName> - just tape in an other name for your application ."),console.log(""),this.l.asck("Do you understand ? do you have an answer for me ?").then(i=>{"1"==i?(this.l.info("Ok nothing war created or altered "),this.l.info("Enjoy the rest of your coding ;)"),process.exit(0),t()):"2"==i?(this.l.info("You choise to delete and create a new folder '"+this.appname+"' from template"),this.l.warn("If you answer (yes|y) the folder '"+this.appname+"' Will be permanently deleted,elsewehere you can make an other choice ."),this.l.asck("Is '"+this.appname+"' The name you wantFor your Application ?").then(i=>{"YES"==i.toUpperCase()||"Y"==i.toUpperCase()?(this.log("Deleting '"+this.NewAppDir+"' ..."),n(this.NewAppDir).then(()=>{this.log("The directory "+this.NewAppDir+" was deleted sucessfuly ."),e(i)}).catch(e=>{t(e)})):t(new c("AbortDelete"))}).catch(e=>{t(e)})):""==i?t(new c("EmptyName")):(this.appname=i,this.NewAppDir=s.join(this.workDir,this.appname),this.l.info("You Choise '"+this.appname+"' to be the new Applcation name"),e(i))}).catch(e=>{t(e)})):e()})})})}startCopy(){return this.log("Copying template files from : "+this.templateDir),new Promise((e,t)=>{r(this.templateDir,this.NewAppDir,i=>{i&&(this.l.error(i.message),t(i)),this.log("Template files copied sucessfuly ."),e()})})}updateProject(){return this.l.check("Writing project metadatas ..."),new Promise((e,t)=>{let i=new l(s.join(this.NewAppDir,"package.json"));i.package.name=this.appname,i.writeFile(),this.log("Metadatas updated sucessfuly ."),e()})}runNpmInstall(){return this.l.check("Running npm install"),new Promise((e,t)=>{this.subprocess.exec("npm",["install"],this.NewAppDir).then(()=>{this.log("npm dependencies are installed sucessfuly ."),e()}).catch(e=>{t(e)})})}autostart(){return this.log("Auto start proposition ...."),new Promise((e,t)=>{this.l.asck("Is The name you wantFor your Application ?").then(i=>{"YES"==i.toUpperCase()||"Y"==i.toUpperCase()?(this.log("Auto start started."),this.subprocess.exec("sweet ",["start"],this.NewAppDir).then(()=>{this.log("Auto start started ended sucessfuly ."),e()}).catch(e=>{t(e)})):e()}).catch(e=>{t(e)})})}run(){this.validateCreationParams().then(()=>{this.startCopy().then(()=>{this.updateProject().then(()=>{this.runNpmInstall().then(()=>{this.autostart().then(()=>{this.l.info("Hope you enjoyed the @sweetcom/cli"),this.l.info("please feel free to visit http://cli.sweetcom75.fr and give us your feed back"),this.l.info(" Buy buy ;) hope you hade good time")}).catch(e=>{throw this.l.error(e.message),e})}).catch(e=>{throw this.l.error(e.message),e})}).catch(e=>{throw this.l.error(e.message),e})}).catch(e=>{throw this.l.error(e.message),e})}).catch(e=>{if(e.message="AbortDelete")this.l.info("Delete aborted, Nothing is created or updated"),this.l.info("Try '1' to exit and do nothing and exit"),this.run();else{if(!(e.message="EmptyName"))throw this.l.error(e.message),new c(e.message);this.l.error("There is a problem creating your application with and empty name "),this.l.error("Try agane and make a choise 1|2|<the name you choise>"),this.l.warn("Try '1' to exit and do nothing and exit"),this.l.error("Nothing is created or updated"),this.run()}})}}},function(e,t,i){const s=i(1),o=i(0);e.exports=function(e,t,i,r){var n=r;r||(n=i,i={});var l=process.cwd(),a=o.resolve(l,e),c=o.resolve(l,t),h=i.filter,u=i.rename,p=i.transform,m=!1!==i.clobber,d=i.modified,f=i.dereference,g=null,w=0,b=0,D=0,k=i.limit||16;function x(e){if(w++,h)if(h instanceof RegExp){if(!h.test(e))return A(!0)}else if("function"==typeof h&&!h(e))return A(!0);return function e(t){var i=f?s.stat:s.lstat;if(D>=k)return setImmediate((function(){e(t)}));D++,i(t,(function(e,i){var r,n,h={};return e?C(e):(h.name=t,h.mode=i.mode,h.mtime=i.mtime,h.atime=i.atime,i.isDirectory()?void P(n=(r=h).name.replace(a,c),(function(e){if(e)return function(e,t){s.mkdir(t,e.mode,(function(t){if(t)return C(t);j(e.name)}))}(r,n);j(r.name)})):i.isFile()?function(e){var t=e.name.replace(a,c);u&&(t=u(t));P(t,(function(i){return i?y(e,t):(m&&v(t,(function(){y(e,t)})),d?void(f?s.stat:s.lstat)(t,(function(i,s){if(!(e.mtime.getTime()>s.mtime.getTime()))return A();y(e,t)})):A())}))}(h):i.isSymbolicLink()?function(e){var t=e.replace(a,c);s.readlink(e,(function(e,i){if(e)return C(e);!function(e,t){f&&(e=o.resolve(l,e));P(t,(function(i){if(i)return _(e,t);s.readlink(t,(function(i,s){return i?C(i):(f&&(s=o.resolve(l,s)),s===e?A():v(t,(function(){_(e,t)})))}))}))}(i,t)}))}(t):void 0)}))}(e)}function y(e,t){var i=s.createReadStream(e.name),o=s.createWriteStream(t,{mode:e.mode});i.on("error",C),o.on("error",C),p?p(i,o,e):o.on("open",(function(){i.pipe(o)})),o.once("finish",(function(){d?(s.utimesSync(t,e.atime,e.mtime),A()):A()}))}function v(e,t){s.unlink(e,(function(e){return e?C(e):t()}))}function j(e){s.readdir(e,(function(t,i){return t?C(t):(i.forEach((function(t){x(o.join(e,t))})),A())}))}function _(e,t){s.symlink(e,t,(function(e){return e?C(e):A()}))}function P(e,t){s.lstat(e,(function(e){return e&&"ENOENT"===e.code?t(!0):t(!1)}))}function C(e){return i.stopOnError?n(e):(!g&&i.errs?g=s.createWriteStream(i.errs):g||(g=[]),void 0===g.write?g.push(e):g.write(e.stack+"\n\n"),A())}function A(e){if(e||D--,b++,w===b&&0===D&&void 0!==n)return n(g||null)}k=k<1?1:k>512?512:k,x(a)}},function(e,t,i){const s=i(1),o=i(0);function r(e){return new Promise((function(t,i){s.access(e,(function(n){n&&i(n),s.readdir(e,{withFileTypes:!0},(function(n,l){if(n&&i(n),0==l.length)return t((a=e,new Promise((e,t)=>{s.rmdir(a,(function(i){i&&t(i),e(a)}))})));var a;l.map((function(i){return i.isDirectory()?t(r(o.join(e,i.name))):t((n=o.join(e,i.name),new Promise((e,t)=>{s.unlink(n,(function(i){i&&t(i),e()}))})));var n}))}))}))}))}e.exports=r},function(e,t,i){const s=i(1);e.exports=class{constructor(e,t){let i=t||!0;this.fileName=e,i&&this.load()}load(){this.package=JSON.parse(s.readFileSync(this.fileName,"utf8"))}updateVersion(){}writeFile(){s.writeFileSync(this.fileName,JSON.stringify(this.package,void 0,4))}}},function(e,t){e.exports=require("child_process")},function(e,t,i){const s=i(0),o=i(1),r=i(2),n=i(22),l=i(7),a=i(23),c=i(3),{CleanWebpackPlugin:h}=i(4);e.exports=class extends l{constructor(e){super(" STARTER ",e),this.verboselog("Detecting envirennement and parameters ..."),this.open=this.params.getParamAsBoolean(["-o","--open"]),this.port=this.params.getParamAsNumber(["-p","--port"],8080),this.host="0.0.0.0",this.package=JSON.parse(o.readFileSync(s.join(this.workDir,"package.json"))),this.wpconfig=new a({port:this.port,host:this.host,workDir:this.workDir,cliDir:this.cliDir}),this.config()}config(){this.wpconfig.devServer={contentBase:s.join(this.workDir,"dist"),port:this.port,host:this.host},this.wpconfig.plugins=[new r.ProvidePlugin({react:s.resolve(s.join(this.cliDir,"node_modules","react")),"react-dom":s.resolve(s.join(this.cliDir,"node_modules","react-dom"))}),new h,new c({template:s.join(this.workDir,"public/index.html"),title:"Development"}),new r.HotModuleReplacementPlugin],this.wpconfig.optimization={removeAvailableModules:!1,removeEmptyChunks:!1,splitChunks:!1},this.wpconfig.module={rules:[{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:s.join(this.cliDir,"node_modules","babel-loader"),options:{cacheDirectory:!1,presets:[s.join(this.cliDir,"node_modules","@babel/preset-env"),s.join(this.cliDir,"node_modules","@babel/preset-react")],plugins:[s.join(this.cliDir,"node_modules","@babel/plugin-proposal-class-properties")]}},{test:/\.(sa|sc|c)ss$/,use:[s.join(this.cliDir,"node_modules","style-loader"),s.join(this.cliDir,"node_modules","css-loader"),s.join(this.cliDir,"node_modules","sass-loader")]},{test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/,/\.svg$/,/\.json$/,/\.ico$/],loader:s.join(this.cliDir,"node_modules","file-loader")},{test:/\.(woff|woff2|eot|ttf|otf)$/,use:[s.join(this.cliDir,"node_modules","file-loader")]}]}}run(){let e={open:!0,contentBase:s.join(this.workDir,"public"),watchContentBase:!1,port:this.port,host:this.host,public:"http://localhost:"+this.port,publicPath:"/",historyApiFallback:!0,hot:!0,overlay:{warnings:!1,errors:!0},quiet:!0};this.l.info("Starting Application : "+this.package.name.toUpperCase()+" verion : "+this.package.version),n.addDevServerEntrypoints(this.wpconfig,e);let t=r(this.wpconfig);t.hooks.done.tap("Sweet-cli",this.compilerCallback.bind(this)),new n(t,e).listen(this.port,this.host,()=>{this.l.info("Default browser will open on http://localhost:' + this.port"),this.l.info("Please wait antil the bundling finishes"),setTimeout(()=>{this.l.info("Enjoy ! ")},5e3)})}}},function(e,t){e.exports=require("webpack-dev-server")},function(e,t,i){const s=i(8),o=i(2),r=i(0);i(9);const n=i(3),{CleanWebpackPlugin:l}=i(4);e.exports=class extends s{constructor(e){super(e),this.config(e)}config(e){this.entry={main:r.join(e.workDir,"src/index.js")},this.plugins=[new l,new n({template:r.join(e.workDir,"public/index.html"),title:"Development"}),new o.HotModuleReplacementPlugin],this.optimization={splitChunks:{chunks:"all",minSize:3e4,minRemainingSize:0,maxSize:2e4,minChunks:1,maxAsyncRequests:6,maxInitialRequests:4,automaticNameDelimiter:"~",automaticNameMaxLength:30,cacheGroups:{vendor:{test:/[\\/]node_modules[\\/](react|react-dom)[\\/]/,name:"vendor",chunks:"all"}},cacheGroups:{defaultVendors:{test:/[\\/]node_modules[\\/]/,priority:-10},default:{minChunks:2,priority:-20,reuseExistingChunk:!0}}}},this.module={rules:[{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:r.join(e.cliDir,"node_modules","babel-loader"),options:{cacheDirectory:!1,presets:[r.join(e.cliDir,"node_modules","@babel/preset-env"),r.join(e.cliDir,"node_modules","@babel/preset-react")],plugins:[r.join(e.cliDir,"node_modules","@babel/plugin-proposal-class-properties")]}},{test:/\.(sa|sc|c)ss$/,use:[r.join(e.cliDir,"node_modules","style-loader"),r.join(e.cliDir,"node_modules","css-loader"),r.join(e.cliDir,"node_modules","sass-loader")]},{test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/,/\.svg$/,/\.json$/,/\.ico$/],loader:r.join(e.cliDir,"node_modules","file-loader")},{test:/\.(woff|woff2|eot|ttf|otf)$/,use:[r.join(e.cliDir,"node_modules","file-loader")]}]}}}},function(e,t,i){const s=i(0),o=i(1),r=i(2),n=i(7),l=i(25);e.exports=class extends n{constructor(e){super(" BUILDER ",e),this.verboselog("Detecting envirennement and parameters ..."),this.package=JSON.parse(o.readFileSync(s.join(this.workDir,"package.json"))),this.wpconfig=new l({port:this.port,host:this.host,workDir:this.workDir,cliDir:this.cliDir})}run(){r(this.wpconfig,this.compilerCallback.bind(this))}compilerCallback(e,t){e&&(this.l.error(e.message),process.exit(-1));const i=t.toJson();if(t.hasErrors()){for(let e=0;e<i.errors.length;e++){const t=i.errors[e];this.l.error(t)}process.exit(-1)}if(t.hasWarnings()){for(let e=0;e<i.warnings.length;e++){const t=i.warnings[e].split("\n");for(let e=0;e<t.length;e++)this.l.warn(t[e])}process.exit(-1)}for(let e=0;e<i.assets.length;e++){const t=i.assets[e];this.l.check(t.name+"\n[1A[40C"+this.l.__c(parseInt(t.size/1024*100)/100+" (ko)",132))}this.l.info("Bundling finishes sucesssfuly in  "+i.time+" (ms) : "),process.exit(0)}}},function(e,t,i){const s=i(8),o=(i(2),i(0));i(9);const r=i(3),{CleanWebpackPlugin:n}=i(4),l=i(26);e.exports=class extends s{constructor(e){super(e),this.config(e)}config(e){this.entry={main:o.join(e.workDir,"src/index.js")},this.mode="production",this.plugins=[new n,new r({template:o.join(e.workDir,"public/index.html"),title:"Development"}),new l([{from:"**/*",to:"assets",force:!0,context:o.join(e.workDir,"public/assets")},{from:"favicon.ico",to:"favicon.ico",force:!0,context:o.join(e.workDir,"public")},{from:"manifest.json",to:"manifest.json",force:!0,context:o.join(e.workDir,"public")}],{})],this.optimization={splitChunks:{chunks:"all",minSize:19e3,maxSize:19e3,minChunks:1,maxAsyncRequests:6,maxInitialRequests:4,automaticNameDelimiter:"~",automaticNameMaxLength:7,cacheGroups:{react:{test:/[\\/]node_modules[\\/]react[\\/]/,priority:-10},default:{minChunks:2,priority:-20,reuseExistingChunk:!0}}}},this.module={rules:[{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:o.join(e.cliDir,"node_modules","babel-loader"),options:{cacheDirectory:!1,presets:[o.join(e.cliDir,"node_modules","@babel/preset-env"),o.join(e.cliDir,"node_modules","@babel/preset-react")],plugins:[o.join(e.cliDir,"node_modules","@babel/plugin-proposal-class-properties")]}},{test:/\.(sa|sc|c)ss$/,use:[o.join(e.cliDir,"node_modules","style-loader"),o.join(e.cliDir,"node_modules","css-loader"),o.join(e.cliDir,"node_modules","sass-loader")]},{test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/,/\.svg$/,/\.json$/,/\.ico$/],loader:o.join(e.cliDir,"node_modules","file-loader")},{test:/\.(woff|woff2|eot|ttf|otf)$/,use:[o.join(e.cliDir,"node_modules","file-loader")]}]}}}},function(e,t){e.exports=require("copy-webpack-plugin")}]);