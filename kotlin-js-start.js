(function (_, Kotlin, $module$lodash) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello Kotlin');
    println($module$lodash.isString('STRING').toString());
    println($module$lodash.isNull('STRING').toString());
  }
  _.main_kand9s$ = main;
  Kotlin.defineModule('kotlin-js-start', _);
  main([]);
  return _;
}(module.exports, require('kotlin'), require('lodash')));
