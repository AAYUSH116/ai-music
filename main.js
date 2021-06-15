song1="";
song2="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function preLoad(){
    song1=loadSound(song1.mp3);
    song2=loadSound(song2.mp3);

}
function setup(){
   canvas= createCanvas(600,600);
   createCanvas.center();

   video=createCapture(VIDEO);
   video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
    image(video,0,0,600,600);
}

function gotPose(results){
if(results.length>0){
leftwristX=results[0].pose.leftwrist.x;
leftwristY=results[0].pose.leftwrist.x;
}
}