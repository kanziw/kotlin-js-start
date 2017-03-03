(function (_, Kotlin, $module$lodash, $module$express) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda(req, res) {
    res.send('Hello, Express.');
  }
  function main(args) {
    println('Hello Kotlin');
    println($module$lodash.isString('STRING').toString());
    println($module$lodash.isNull('STRING').toString());
    var app = $module$express();
    app.get('/', main$lambda);
    println('Starting server, PORT: 3762');
    app.listen(3762);
  }
  _.main_kand9s$ = main;
  Kotlin.defineModule('kotlin-js-start', _);
  main([]);
  return _;
}(module.exports, require('kotlin'), require('lodash'), require('express')));
