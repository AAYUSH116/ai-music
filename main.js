song1="";
song2="";

function preLoad(){
    song1=loadSound(song1.mp3);
    song2=loadSound(song2.mp3);

}
function setup(){
   canvas= createCanvas(600,600);
   createCanvas.center();

   video=createCapture(VIDEO);
   video.hide();
}

function draw(){
    image(video,0,0,600,600);
}