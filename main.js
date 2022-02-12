var  nosex = 0;
var  nosey = 0;
var  leftwrist = 0;
var  rightwrist = 0;
var  difference = 0;
function setup(){
canvas = createCanvas(500,500);
canvas.position(500,150);
video = createCapture(VIDEO);
video.size(400,300);
posenet = ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function preload(){

}
function draw(){
background("black");
fill("green");
stroke("green");
textSize(difference);
text("Nathan",nosex,nosey);
document.getElementById("square_size").innerHTML="width and height of the font will be"+difference+"px";
}
function modelloaded(){
    console.log("posenet is working");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex"+nosex+"nosey"+nosey);
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        console.log("leftwrist"+leftwrist+"rightwrist"+rightwrist);
        difference = floor(leftwrist - rightwrist);
        console.log("difference"+difference);
    }
}