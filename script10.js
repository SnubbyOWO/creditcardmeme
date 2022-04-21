window.onload = choosePic;

var myPix = new Array("trolled6.png","trolled5.png","trolled4.png","trolled3.png","trolled2.png","trolled!.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("bool").src = myPix[randomNum];
}