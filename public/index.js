window.addEventListener("load", function(){
const canvas = document.querySelector("#main-canvas");
const context = canvas.getContext("2d");

var x = 100;
var y = 100;

document.addEventListener('keydown', function(event){

 switch(event.key){
   case "w":
   context.moveTo(x, y);
   context.lineTo(x, y - 5);
   context.stroke();
   y-=5;
   break;    
   case "s":
   context.moveTo(x, y);
   context.lineTo(x, y + 5);
   context.stroke();
   y+=5;
   break;    
   case "a":
   context.moveTo(x, y);
   context.lineTo(x - 5, y);
   context.stroke();
   x-=5;
   break;    
   case "d":
   context.moveTo(x, y);
   context.lineTo(x + 5, y);
   context.stroke();
   x+=5;
   break;
}});