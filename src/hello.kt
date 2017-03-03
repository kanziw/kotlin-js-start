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
