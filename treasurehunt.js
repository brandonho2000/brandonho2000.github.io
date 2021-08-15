//alert("HEY IM CONNECTED")
// Follow the work flow so that you can check each item as you build it out

// User can click on the table as a kind of game board
// user click should reveal a treasure
// user click should reveal a bomb

//Random Number
//var randomNum = Math.floor(Math.random() * 9)

//Example locations
var treasureLocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)
var bombLocationTwo = Math.floor(Math.random() * 9)
while (treasureLocation == bombLocation) {
  bombLocation = Math.floor(Math.random() * 9)
}


//const treasure = () => {
  //  alert("Hey Treasure function is connected")
//}

//const treasure = (location) => {
//   if (location == treasureLocation){
//         alert("You Win")
//     }
//     else if( location == bombLocation){
//         alert("you lose")
//     }
//     else {
//         alert(location)
//     }
 //}


 const treasure = (location) => {
     if (location == treasureLocation){
          document.getElementById(location).innerHTML = "&#x1f48E"
     }
     else if( location == bombLocation){
         document.getElementById(location).innerHTML = "&#x1F4A3"
     }
     else {
         document.getElementById(location).innerHTML = "&#x1F334"
     }
 }
