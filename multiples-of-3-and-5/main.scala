object Main extends App {
  val n: Int = 1000
  var total: Int = 0

  var i = 0
  for(i <- 1 to n ) {
    if(i % 3 == 0 || i % 5 == 0){
      total += i
    }
  }
  println(total);
}