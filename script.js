var c=0;
function run()
{

var r1=Math.random();
r1=Math.floor(r1*6)+1;
var s="images/dice/"+r1+".png";
document.querySelector('#dice-image1').classList.add('animate');
document.querySelector('#dice-image1').setAttribute('src',s);

setTimeout(function(){
    document.querySelector('#dice-image1').classList.remove('animate');
}, 1000);
  


var r2=Math.random();
r2=Math.floor(r2*6)+1;
var s="images/dice/"+r2+".png";
document.querySelector('#dice-image2').classList.add('animate');
document.querySelector('#dice-image2').setAttribute('src',s);

setTimeout(function(){
    document.querySelector('#dice-image2').classList.remove('animate');
}, 1000);

c+=1;

if(r1>r2) var ss="PLAYER 1 WON";
else if(r2>r1) var ss="PLAYER 2 WON";
else var ss="It's A DRAW";


document.querySelector('.win').innerText=ss;

if(c!=0)
{
    document.querySelector('.visible').classList.remove('visible');
}



}



