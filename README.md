# Kotlin-Js Start

## Pre-Installation

* [IntelliJ](https://www.jetbrains.com/idea/download/)
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html) >= 1.8



## Start IntelliJ Project

![New Project](./images/PROJECT_00.png)

![New Project](./images/PROJECT_01.png)



## Hello, Kotlin

* hello.kt

```kotlin
fun main(args: Array<String>) {
    println("Hello Kotlin")
}
```



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



## Import 실습 - lodash

* hello.kt

```kotlin
external interface Lodash {
    fun isString(obj: Any = definedExternally): Lodash
    fun isNull(obj: Any = definedExternally): Lodash
}

@JsModule("lodash")
external val lodash: Lodash

fun main(args: Array<String>) {
    println("Hello Kotlin")
    println(lodash.isString("STRING").toString())
    println(lodash.isNull("STRING").toString())
}
```

* 결과

```shell
$ npm run test

> kotlin-js-start@1.0.0 test /Users/kanziw/dev/kotlin-js-start
> node kotlin-js-start.js

Hello Kotlin
true
false
```



## Import 실습 - express

* hello.kt

```kotlin
external interface Lodash {
    fun isString(obj: Any = definedExternally): Lodash
    fun isNull(obj: Any = definedExternally): Lodash
}

@JsModule("lodash")
external val lodash: Lodash

external interface Express {
    fun get(address: String, callback: Any): Express
    fun listen(port: Int)
}

@JsModule("express")
external fun express(): Express

external interface ExpressResponse {
    fun send(string: String): Unit
}

fun main(args: Array<String>) {
    println("Hello Kotlin")
    println(lodash.isString("STRING").toString())
    println(lodash.isNull("STRING").toString())

    val app = express()

    app.get("/") { req: Any, res: ExpressResponse -> res.send("Hello, Express.") }

    println("Starting server, PORT: 3762")
    app.listen(3762)
}
```

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

