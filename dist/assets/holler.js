define('holler/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', './config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('holler/controllers/login', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ObjectController.extend({
    actions: {
      authenticate: function () {
        var user = Ember['default'].Object.create({
          email: this.get("model.email"),
          password: this.get("model.password")
        });

        // Dumping input to the console for now...
        console.log(user);

        this.transitionToRoute("channels");
      }
    }
  });

});
define('holler/controllers/signup', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].ObjectController.extend({
    actions: {
      createAccount: function () {
        var self = this;

        var credentials = Ember['default'].Object.create({
          identification: this.get("model.email"),
          password: this.get("model.password")
        });

        // Dumping input to the console for now...
        console.log(credentials);

        this.transitionToRoute("channels");
      }
    }
  });

});
define('holler/initializers/export-application-global', ['exports', 'ember', '../config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('holler/models/attachment', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('holler/models/channel', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('holler/models/message', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('holler/models/registration', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr("string"),
    email: DS['default'].attr("string"),
    password: DS['default'].attr("string"),
    passwordConfirmation: DS['default'].attr("string")
  });

});
define('holler/models/user', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('holler/router', ['exports', 'ember', './config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    // Authentication
    this.route("login");
    this.route("signup");

    // Resources
    this.resource("users", function () {});
    this.resource("messages", function () {});
    this.resource("channels", function () {});
    this.resource("attachments", function () {});
  });

  exports['default'] = Router;

});
define('holler/routes/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('holler/routes/attachments', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('holler/routes/channels', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('holler/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('holler/routes/login', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('holler/routes/messages', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('holler/routes/signup', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function () {
      return this.store.createRecord("registration");
    }
  });

});
define('holler/routes/users', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('holler/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    data.buffer.push("<h1>Holler</h1>\n\n");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('holler/templates/attachments', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('holler/templates/channels', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    


    data.buffer.push("<h1>Channels</h1>\n");
    
  });

});
define('holler/templates/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push("<nav>\n  <ul>\n    ");
    data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Log In", "login", options) : helperMissing.call(depth0, "link-to", "Log In", "login", options))));
    data.buffer.push("\n    ");
    data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Sign Up", "signup", options) : helperMissing.call(depth0, "link-to", "Sign Up", "signup", options))));
    data.buffer.push("\n  </ul>\n</nav>\n");
    return buffer;
    
  });

});
define('holler/templates/login', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Back", "index", options) : helperMissing.call(depth0, "link-to", "Back", "index", options))));
    data.buffer.push("\n<h1>Login</h1>\n\n<form ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "authenticate", {hash:{
      'on': ("submit")
    },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push(">\n  ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("fields.email"),
      'type': ("email"),
      'placeholder': ("Email address")
    },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n  ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("fields.password"),
      'type': ("password"),
      'placeholder': ("Password")
    },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n  <button type=\"submit\">Log In</button>\n</form>\n");
    return buffer;
    
  });

});
define('holler/templates/messages', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('holler/templates/signup', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


    data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Back", "index", options) : helperMissing.call(depth0, "link-to", "Back", "index", options))));
    data.buffer.push("\n<h1>Sign Up</h1>\n\n<form ");
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAccount", {hash:{
      'on': ("submit")
    },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
    data.buffer.push(">\n  ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("name"),
      'placeholder': ("Full name")
    },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n  ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("email"),
      'placeholder': ("Email address"),
      'type': ("email")
    },hashTypes:{'value': "ID",'placeholder': "STRING",'type': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n  ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("password"),
      'placeholder': ("Password"),
      'type': ("password")
    },hashTypes:{'value': "ID",'placeholder': "STRING",'type': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n  ");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'value': ("passwordConfirmation"),
      'placeholder': ("Password confirmation"),
      'type': ("password")
    },hashTypes:{'value': "ID",'placeholder': "STRING",'type': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n  <button type=\"submit\">Create Account</button>\n</form>\n");
    return buffer;
    
  });

});
define('holler/templates/users', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('holler/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('holler/tests/controllers/login.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/login.js should pass jshint', function() { 
    ok(true, 'controllers/login.js should pass jshint.'); 
  });

});
define('holler/tests/controllers/signup.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/signup.js should pass jshint', function() { 
    ok(false, 'controllers/signup.js should pass jshint.\ncontrollers/signup.js: line 6, col 11, \'self\' is defined but never used.\n\n1 error'); 
  });

});
define('holler/tests/helpers/resolver', ['exports', 'ember/resolver', '../../config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('holler/tests/helpers/start-app', ['exports', 'ember', '../../app', '../../router', '../../config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';

  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
  exports['default'] = startApp;

});
define('holler/tests/holler/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/helpers');
  test('holler/tests/helpers/resolver.js should pass jshint', function() { 
    ok(true, 'holler/tests/helpers/resolver.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/helpers');
  test('holler/tests/helpers/start-app.js should pass jshint', function() { 
    ok(true, 'holler/tests/helpers/start-app.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - holler/tests');
  test('holler/tests/test-helper.js should pass jshint', function() { 
    ok(true, 'holler/tests/test-helper.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/controllers/login-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/controllers');
  test('holler/tests/unit/controllers/login-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/controllers/login-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/controllers/signup-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/controllers');
  test('holler/tests/unit/controllers/signup-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/controllers/signup-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/models/attachment-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/models');
  test('holler/tests/unit/models/attachment-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/models/attachment-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/models/channel-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/models');
  test('holler/tests/unit/models/channel-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/models/channel-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/models/message-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/models');
  test('holler/tests/unit/models/message-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/models/message-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/models/registration-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/models');
  test('holler/tests/unit/models/registration-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/models/registration-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/models/user-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/models');
  test('holler/tests/unit/models/user-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/models/user-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/routes/application-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/routes');
  test('holler/tests/unit/routes/application-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/routes/application-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/routes/attachments-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/routes');
  test('holler/tests/unit/routes/attachments-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/routes/attachments-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/routes/channels-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/routes');
  test('holler/tests/unit/routes/channels-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/routes/channels-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/routes/index-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/routes');
  test('holler/tests/unit/routes/index-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/routes/index-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/routes/login-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/routes');
  test('holler/tests/unit/routes/login-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/routes/login-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/routes/messages-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/routes');
  test('holler/tests/unit/routes/messages-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/routes/messages-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/routes/signup-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/routes');
  test('holler/tests/unit/routes/signup-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/routes/signup-test.js should pass jshint.'); 
  });

});
define('holler/tests/holler/tests/unit/routes/users-test.jshint', function () {

  'use strict';

  module('JSHint - holler/tests/unit/routes');
  test('holler/tests/unit/routes/users-test.js should pass jshint', function() { 
    ok(true, 'holler/tests/unit/routes/users-test.js should pass jshint.'); 
  });

});
define('holler/tests/models/attachment.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/attachment.js should pass jshint', function() { 
    ok(true, 'models/attachment.js should pass jshint.'); 
  });

});
define('holler/tests/models/channel.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/channel.js should pass jshint', function() { 
    ok(true, 'models/channel.js should pass jshint.'); 
  });

});
define('holler/tests/models/message.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/message.js should pass jshint', function() { 
    ok(true, 'models/message.js should pass jshint.'); 
  });

});
define('holler/tests/models/registration.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/registration.js should pass jshint', function() { 
    ok(true, 'models/registration.js should pass jshint.'); 
  });

});
define('holler/tests/models/user.jshint', function () {

  'use strict';

  module('JSHint - models');
  test('models/user.js should pass jshint', function() { 
    ok(true, 'models/user.js should pass jshint.'); 
  });

});
define('holler/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('holler/tests/routes/application.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function() { 
    ok(true, 'routes/application.js should pass jshint.'); 
  });

});
define('holler/tests/routes/attachments.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/attachments.js should pass jshint', function() { 
    ok(true, 'routes/attachments.js should pass jshint.'); 
  });

});
define('holler/tests/routes/channels.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/channels.js should pass jshint', function() { 
    ok(true, 'routes/channels.js should pass jshint.'); 
  });

});
define('holler/tests/routes/index.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function() { 
    ok(true, 'routes/index.js should pass jshint.'); 
  });

});
define('holler/tests/routes/login.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/login.js should pass jshint', function() { 
    ok(true, 'routes/login.js should pass jshint.'); 
  });

});
define('holler/tests/routes/messages.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/messages.js should pass jshint', function() { 
    ok(true, 'routes/messages.js should pass jshint.'); 
  });

});
define('holler/tests/routes/signup.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/signup.js should pass jshint', function() { 
    ok(false, 'routes/signup.js should pass jshint.\nroutes/signup.js: line 5, col 51, Missing semicolon.\n\n1 error'); 
  });

});
define('holler/tests/routes/users.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/users.js should pass jshint', function() { 
    ok(true, 'routes/users.js should pass jshint.'); 
  });

});
define('holler/tests/test-helper', ['./helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

	document.write("<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>");

	QUnit.config.urlConfig.push({ id: "nocontainer", label: "Hide container" });
	var containerVisibility = QUnit.urlParams.nocontainer ? "hidden" : "visible";
	document.getElementById("ember-testing-container").style.visibility = containerVisibility;

});
define('holler/tests/unit/controllers/login-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:login", "LoginController", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var controller = this.subject();
    ok(controller);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/controllers/signup-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("controller:signup", "SignupController", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function () {
    var controller = this.subject();
    ok(controller);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/models/attachment-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("attachment", "Attachment", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function () {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});
define('holler/tests/unit/models/channel-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("channel", "Channel", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function () {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});
define('holler/tests/unit/models/message-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("message", "Message", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function () {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});
define('holler/tests/unit/models/registration-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("registration", "Registration", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function () {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});
define('holler/tests/unit/models/user-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel("user", "User", {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test("it exists", function () {
    var model = this.subject();
    // var store = this.store();
    ok(!!model);
  });

});
define('holler/tests/unit/routes/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:application", "ApplicationRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/routes/attachments-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:attachments", "AttachmentsRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/routes/channels-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:channels", "ChannelsRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/routes/index-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:index", "IndexRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/routes/login-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:login", "LoginRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/routes/messages-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:messages", "MessagesRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/routes/signup-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:signup", "SignupRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
define('holler/tests/unit/routes/users-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("route:users", "UsersRoute", {});

  ember_qunit.test("it exists", function () {
    var route = this.subject();
    ok(route);
  });
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']

});
/* jshint ignore:start */

define('holler/config/environment', ['ember'], function(Ember) {
  var prefix = 'holler';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("holler/tests/test-helper");
} else {
  require("holler/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=holler.map