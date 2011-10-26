// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require({
  paths: {
    //domReady: 'lib/require/addon/domReady',
    order: 'lib/require/addon/order',
    cs: 'lib/require/addon/cs',
    fabric: 'lib/fabric/fabric',
    //cufon: 'lib/cufon/Cufon',
    Delicious_500: 'Delicious_500.font'
  }
}, ['cs!csmain']);

require([
  'order!lib/fabric/fabric-min',
  'order!lib/cufon/Cufon-min'
  //'order!Delicious_500.font'
], function(){
});



/*
require([
  // Load our app module and pass it to our definition function
  'app',

  // Some plugins have to be loaded in order due to their non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
  'order!Delicious_500.font',
  'order!lib/fabric/fabric-min'
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});*/