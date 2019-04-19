"use strict"
define("island-beskids/app",["exports","island-beskids/resolver","ember-load-initializers","island-beskids/config/environment"],function(e,i,a,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Application.extend({modulePrefix:t.default.modulePrefix,podModulePrefix:t.default.podModulePrefix,Resolver:i.default});(0,a.default)(n,t.default.modulePrefix)
var d=n
e.default=d}),define("island-beskids/helpers/app-version",["exports","island-beskids/config/environment","ember-cli-app-version/utils/regexp"],function(e,i,a){function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.default.APP.version,d=t.versionOnly||t.hideSha,l=t.shaOnly||t.hideVersion,r=null
return d&&(t.showExtended&&(r=n.match(a.versionExtendedRegExp)),r||(r=n.match(a.versionRegExp))),l&&(r=n.match(a.shaRegExp)),r?r[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=t,e.default=void 0
var n=Ember.Helper.helper(t)
e.default=n}),define("island-beskids/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=i.default
e.default=a}),define("island-beskids/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=i.default
e.default=a}),define("island-beskids/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","island-beskids/config/environment"],function(e,i,a){var t,n
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(t=a.default.APP.name,n=a.default.APP.version)
var d={name:"App Version",initialize:(0,i.default)(t,n)}
e.default=d}),define("island-beskids/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",i.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("island-beskids/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,i,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize:i.default}
e.default=t}),define("island-beskids/initializers/export-application-global",["exports","island-beskids/config/environment"],function(e,i){function a(){var e=arguments[1]||arguments[0]
if(!1!==i.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var t,n=i.default.exportApplicationGlobal
t="string"==typeof n?n:Ember.String.classify(i.default.modulePrefix),a[t]||(a[t]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[t]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var t={name:"export-application-global",initialize:a}
e.default=t}),define("island-beskids/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:i.default}
e.default=a}),define("island-beskids/resolver",["exports","ember-resolver"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=i.default
e.default=a}),define("island-beskids/router",["exports","island-beskids/config/environment"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Router.extend({location:i.default.locationType,rootURL:i.default.rootURL})
a.map(function(){})
var t=a
e.default=t}),define("island-beskids/services/ajax",["exports","ember-ajax/services/ajax"],function(e,i){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}})}),define("island-beskids/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.HTMLBars.template({id:"Q41l85VS",block:'{"symbols":[],"statements":[[5,"welcome-page",[],[[],[]]],[0,"\\n"],[0,"\\n"],[1,[23,"outlet"],false]],"hasEval":false}',meta:{moduleName:"island-beskids/templates/application.hbs"}})
e.default=i}),define("island-beskids/config/environment",[],function(){try{var e="island-beskids/config/environment",i=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(decodeURIComponent(i))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("island-beskids/app").default.create({name:"island-beskids",version:"0.0.0+38b77751"})
