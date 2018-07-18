function playSound( url ){ 
var url = '/audio/an.mp3';  
  document.getElementById("sound").innerHTML="<embed src='"+url+"' hidden=true autostart=true loop=false>";
}