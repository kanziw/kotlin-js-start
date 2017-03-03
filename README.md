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

