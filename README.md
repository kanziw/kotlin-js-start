# Kotlin-Js Start

## Pre-Installation

* [IntelliJ](https://www.jetbrains.com/idea/download/)
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html) >= 1.8



## Start IntelliJ Project ([baf9a82](https://github.com/kanziw/kotlin-js-start/commit/baf9a829778940e044911f6b8ce92739d0086f1b))

![New Project](./images/PROJECT_00.png)

![New Project](./images/PROJECT_01.png)



## Hello, Kotlin ([54deca6](https://github.com/kanziw/kotlin-js-start/commit/54deca6d38ae5da4b316eb51965c8faf3599ec5a))

* [hello.kt](https://github.com/kanziw/kotlin-js-start/blob/54deca6d38ae5da4b316eb51965c8faf3599ec5a/src/hello.kt)


* IntelliJ 설정

![CommonJS Setting](./images/BUILD_00.png)

![Build Setting](./images/BUILD_01.png)



빌드 하면 프로젝트 최상위 디렉터리에 `kotlin-js-start.js` 파일이 생성되며, `node` 명령어로 실행할 수 있다.

```shell
$ npm run test

> kotlin-js-start@1.0.0 test /Users/kanziw/dev/kotlin-js-start
> node kotlin-js-start.js

Hello Kotlin
```



## Import 실습 - lodash ([de3591b](https://github.com/kanziw/kotlin-js-start/commit/de3591b46dfb1ab95c1119be05821f68ce0e15b7))

* [hello.kt](https://github.com/kanziw/kotlin-js-start/blob/de3591b46dfb1ab95c1119be05821f68ce0e15b7/src/hello.kt)
* 결과

```shell
$ npm run test

> kotlin-js-start@1.0.0 test /Users/kanziw/dev/kotlin-js-start
> node kotlin-js-start.js

Hello Kotlin
true
false
```



## Import 실습 - express ([d41e1ed](https://github.com/kanziw/kotlin-js-start/commit/d41e1ed3e3d0c17c0d85026168209dcf1381bd5e))

* [hello.kt](https://github.com/kanziw/kotlin-js-start/blob/d41e1ed3e3d0c17c0d85026168209dcf1381bd5e/src/hello.kt)


* Server

```shell
$ npm run test

> kotlin-js-start@1.0.0 test /Users/kanziw/dev/kotlin-js-start
> node kotlin-js-start.js

Hello Kotlin
true
false
Starting server, PORT: 3762
```

* Curl

```shell
$ curl localhost:3762
Hello, Express.
```



## coroutine - yield basic ([515f668](https://github.com/kanziw/kotlin-js-start/commit/515f668f823cca77d5745a39f7ab2ebd3f9bb3d7))

* [hello.kt](https://github.com/kanziw/kotlin-js-start/blob/515f668f823cca77d5745a39f7ab2ebd3f9bb3d7/src/hello.kt)


* Server

```shell
$ npm run test

> kotlin-js-start@1.0.0 test /Users/kanziw/dev/kotlin-js-start
> node kotlin-js-start.js

Hello Kotlin
true
false
Starting server, PORT: 3762
START 1 STEP 2 STEP 3 0 1 2 3 4 5 6 7 8 9 10
```

* Curl

```shell
$ curl localhost:3762/yield/1
DONE
$ curl localhost:3762/yield/2
DONE
```



## Build on command line ([7ba4ec6](https://github.com/kanziw/kotlin-js-start/commit/7ba4ec6bebd75b2af080d1d0ed3cfb4895720c16))

* Install CLI-command tool with brew

```shell
$ brew install kotlin
```

* Build

```shell
$ kotlinc-js -output main.js -libraries node_modules/ -meta-info -module-kind commonjs -verbose src/hello.kt
```

### by NPM

* Build : `npm run build`
* Start : `npm run start`

