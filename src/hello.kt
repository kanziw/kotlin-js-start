import kotlin.coroutines.experimental.*

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

    val DONE = "DONE\n"

    app.get("/yield/1", fun(req: Any, res: ExpressResponse) {
        val lazySeq = buildSequence {
            print("START ")
            for (i in 1..5) {
                yield(i)
                print("STEP ")
            }
            print("END\n")
        }

        // Print the first three elements of the sequence
        lazySeq.take(3).forEach { print("$it ") }

        res.send(DONE)
    })

    app.get("/yield/2") { req: Any, res: ExpressResponse ->
        val lazySeq = buildSequence {
            yield(0)
            yieldAll(1..10)
        }

        lazySeq.forEach { print("$it ") }

        res.send(DONE)
    }

    println("Starting server, PORT: 3762")
    app.listen(3762)
}
