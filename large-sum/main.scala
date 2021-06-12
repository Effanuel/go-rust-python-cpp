object Main extends App {
    val source = scala.io.Source.fromFile("./data.txt")
    val lines = try println(source.mkString.split('\n').map(n => BigInt(n)).sum.toString.slice(0, 10)) finally source.close()
}