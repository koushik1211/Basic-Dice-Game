random_num1=Math.floor((Math.random()*6))+1;
random_num2=Math.floor(Math.random()*6)+1;

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
var setImg1="./images/dice"+random_num1+".png";
var setImg2="./images/dice"+random_num2+".png";
image1.setAttribute("src",setImg1);
image2.setAttribute("src",setImg2);
if(random_num1>random_num2)
{
 document.querySelector("h1").innerHTML="Player 1 Won 🚩";
}
else if(random_num1<random_num2){
document.querySelector("h1").innerHTML="Player 2 Won 🚩";

}
else
{
document.querySelector("h1").innerHTML="Draw";

}