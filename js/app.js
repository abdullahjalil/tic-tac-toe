var squares = document.getElementsByTagName('td');

var turnCount = 0;


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function(event){
    if (this.innerHTML == "") {
      if (turnCount % 2 == 0) {
        this.classList.add("X");
        this.innerHTML = "X";
        turnCount++;
      } else if (turnCount % 2 == 1) {
        this.classList.add("O");
        this.innerHTML = "O";
        turnCount++;
      }
    }
})
}
