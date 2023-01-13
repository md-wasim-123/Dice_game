
function playGame(){
var firstrandomnum=Math.floor(Math.random()*6)+1

//all image 1 and 6 random 
var firstdiceimge='/image/dice'+firstrandomnum+'.png';

document.querySelectorAll("img")[0].setAttribute('src',firstdiceimge)




//second dice random number 
var secondrandomnum=Math.floor(Math.random()*6)+1


//all image 1 and 6 random 
var seconddiceimge='/image/dice'+secondrandomnum+'.png';

document.querySelectorAll("img")[1].setAttribute('src',seconddiceimge)


//conditions  in a player 

if (firstrandomnum>secondrandomnum) {
  document.querySelector('h3').innerHTML='Player1 is a winner';
  
} 
else if(firstrandomnum<secondrandomnum){
document.querySelector('h3').innerHTML='Player2 is winner';
}
else{
  document.querySelector('h3').innerHTML=('All players equal');
}
}

document.querySelector("button").addEventListener("click",playGame);
