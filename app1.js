
// Set up players
var player1 = {name:"Player 1",marker:"X", clicked:[]};
var player2 = {name:"Player 2",marker:"O", clicked:[]};
// var Wins = {r1:[s0,s2,s3],r2:[s4,s5,s6],r3:[s7,s8,s9],c1:[s0,s4,s7],c2:[s2,s5,s8],c3:[s3,s6,s9],d1:[s0,s5,s9],d2:[s3,s5,s9]};

var counter = 0;
var selectedMarker;
var currentslot;

// var checkWinnerRows = function(){
//   if (document.querySelector(".s0").innerHTML === document.querySelector(".s1").innerHTML === document.querySelector(".s2").innerHTML ) {
//     alert("Winner is " + document.querySelector('.s0').innerHTML);
//     }
//   else if (document.querySelector(".s3").innerHTML === document.querySelector(".s4").innerHTML === document.querySelector(".s5").innerHTML ) {
//     alert("Winner is " + document.querySelector('.slot3').innerHTML);
//     }
//   else if (document.querySelector(".s6").innerHTML === document.querySelector(".s7").innerHTML === document.querySelector(".s8").innerHTML ) {
//     alert("Winner is " + document.querySelector('.s6').innerHTML);
//     }
//     else {
//       console.log("continue");
//     }
//   };
// var checkWinnerColumns;
// var checkWinnerDiagonals;

// var CheckWins = function(){
//   for (var i = player1.clicked.length - 1; i >= 0; i--) {
//     Things[i]
//   };
// }

var checkDraw;


var tracker = function(){
if (counter%2 === 0){
  player2.clicked.push(currentslot);
  console.log("Now, Player 2 has claimed the slots:" + player2.clicked);
} else {
  player1.clicked.push(currentslot);
  console.log("Now, Player 1 has claimed the slots:" + player1.clicked);
}
};

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

var clickmagic = function (event) {
  console.log("Let there be magic!");
  if (this.innerHTML===""){
  counter++;
  } else {
    return;
  }
  console.log("counter is " + counter);
  selector();
  if (this.innerHTML === ""){
  this.innerHTML = selectedMarker;
} else {
  return;
}
  currentslot = this.id;
  console.log(currentslot);
  tracker();
  // checkWinnerRows();
  // checkWinnerColumns();
  // checkWinnerDiagonals();
  // checkDraw();

};

var resetmagic = function(event){
  console.log("Resetmagic initiated");
  for (var i = 0; i <=8; i++) {
    document.querySelector("#s" + i).innerHTML="";
  }
  player1.clicked = [];
  player2.clicked = [];
  counter = 0;
};

var initialize = function (){
    console.log("Window is done loading page.");
    for (var i = 0; i <=8; i++) {
    document.querySelector("#s"+ i).addEventListener("click",clickmagic);
    }
    document.querySelector(".btn").addEventListener("click",resetmagic);
};




window.onload = initialize;

console.log("Javascript is ready!");