(function (_, Kotlin, $module$lodash, $module$express) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var intrinsics_0 = Kotlin.kotlin.coroutines.experimental.intrinsics;
  var buildSequence = Kotlin.kotlin.coroutines.experimental.buildSequence_of7nec$;
  var take = Kotlin.kotlin.sequences.take_wuwhe2$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  function main$lambda(req, res) {
    res.send('Hello, Express.');
  }
  function main$lambda$lambda($receiver, interceptor_0, suspended) {
    var instance = (new Coroutine$main$lambda$lambda($receiver, this, interceptor_0)).facade;
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda$lambda($receiver, controller, interceptor) {
    CoroutineImpl.call(this, interceptor);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$i = void 0;
    this.local$$receiver = $receiver;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            print('START ');
            this.local$i = 1;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i > 5) {
              this.state_0 = 5;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$i, this.facade);
            if (this.result_0 === intrinsics_0.COROUTINE_SUSPENDED)
              return intrinsics_0.COROUTINE_SUSPENDED;
            break;
          case 3:
            print('STEP ');
            this.state_0 = 4;
            continue;
          case 4:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 5:
            return print('END\n');
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda_0(closure$DONE) {
    return function (req, res) {
      var lazySeq = buildSequence(main$lambda$lambda);
      var tmp$;
      tmp$ = take(lazySeq, 3).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        print(element.toString() + ' ');
      }
      res.send(closure$DONE);
    };
  }
  function main$lambda$lambda_0($receiver, interceptor_0, suspended) {
    var instance = (new Coroutine$main$lambda$lambda_0($receiver, this, interceptor_0)).facade;
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda$lambda_0($receiver, controller, interceptor) {
    CoroutineImpl.call(this, interceptor);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver;
  }
  Coroutine$main$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda_0;
  Coroutine$main$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.yield_11rb$(0, this.facade);
            if (this.result_0 === intrinsics_0.COROUTINE_SUSPENDED)
              return intrinsics_0.COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yieldAll_p1ys8y$(new IntRange(1, 10), this.facade);
            if (this.result_0 === intrinsics_0.COROUTINE_SUSPENDED)
              return intrinsics_0.COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda_1(closure$DONE) {
    return function (req, res) {
      var lazySeq = buildSequence(main$lambda$lambda_0);
      var tmp$;
      tmp$ = lazySeq.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        print(element.toString() + ' ');
      }
      res.send(closure$DONE);
    };
  }
  function main(args) {
    println('Hello Kotlin');
    println($module$lodash.isString('STRING').toString());
    println($module$lodash.isNull('STRING').toString());
    var app = $module$express();
    app.get('/', main$lambda);
    var DONE = 'DONE\n';
    app.get('/yield/1', main$lambda_0(DONE));
    app.get('/yield/2', main$lambda_1(DONE));
    println('Starting server, PORT: 3762');
    app.listen(3762);
  }
  _.main_kand9s$ = main;
  Kotlin.defineModule('kotlin-js-start', _);
  main([]);
  return _;
}(module.exports, require('kotlin'), require('lodash'), require('express')));
