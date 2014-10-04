
// Set up players
var player1 = {name:"Player 1",marker:"X", clicked:[]};
var player2 = {name:"Player 2",marker:"O", clicked:[]};



// var inputMarker = function(){
// var list_items = document.querySelectorAll("div#essentials > ul > li");
// for (var i = list_items.length - 1; i >= 0; i--) {
// list_items[i].style.backgroundColor = "yellow";
// list_items[i].addEventListener("click", selectItem);
// };
// }

// var selectItem = function( event ){
// console.log("Clicked item:" + this.innerHTML + ". Event:" + event);
// this.innerHTML.add(inputMarker);
// document.querySelector("img").setAttribute("src","./images/" + this.innerHTML + ".jpeg");
// }


// var makeMark = function (event) {
//   var slot = document.querySelector("div#" + slot + )

//   console.log("Player clicked on " + slotNum +  )
//   list_items[i].className = "";

// };


// var counter = function(event) {
// for (var i = Things.length - 1; i >= 0; i++) {
//   Things[i]
// };


//   console.log("this function has run " + numTimes + " time(s).")
// };



// var tracker = function(){
// if (counter%2 === 0){
//   player2.clicked.push(currentslot);
//   console.log("Now, Player 2 has claimed the slots:" + player2.clicked);
// } else {
//   player1.clicked.push(currentslot);
//   console.log("Now, Player 1 has claimed the slots:" + player1.clicked);
// }
// };


var selectedMarker;
var counter = 0;
var currentslot;

var selector = function(){
 if (counter%2 === 0){
    selectedMarker = player2.marker;
    console.log(selectedMarker);
 }
 else {
    selectedMarker = player1.marker;
    console.log(selectedMarker);
 }
};

var magic = function (event) {
  console.log("Let there be magic!");
  counter++;
  console.log("counter is " + counter);
  selector();
  // currentslot = this.id;
  // console.log(currentslot);
  if (this.innerHTML === ""){
  this.innerHTML = selectedMarker;
} else {
  return;
}
//make sure not to repeat;
  // tracker();
};


var initialize = function (){
    console.log("Window is done loading page.");
    for (var i = 0; i <=8; i++) {
    document.querySelector("#slot"+ i).addEventListener("click",magic);
    }


    // document.querySelector("#slot0").addEventListener("click",magic);
    // document.querySelector("#slot1").addEventListener("click",magic);
    // document.querySelector("#slot2").addEventListener("click",magic);
    // document.querySelector("#slot3").addEventListener("click",magic);
    // document.querySelector("#slot4").addEventListener("click",magic);
    // document.querySelector("#slot5").addEventListener("click",magic);
    // document.querySelector("#slot6").addEventListener("click",magic);
    // document.querySelector("#slot7").addEventListener("click",magic);
    // document.querySelector("#slot8").addEventListener("click",magic);
};




window.onload = initialize;

console.log("Javascript is ready!");