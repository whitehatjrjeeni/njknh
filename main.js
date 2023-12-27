video=""
status=""
object=[]

function preload(){
   audio = loadSound("beep.mp3")
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    vedio = createCapture(VIDEO);
    video.size(360, 380);
    vedio.hide();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML= "status : Detecting Object";
}

function modelloaded(){
    console.log("modelloaded");
    status=true;
    
}
function gotresult(error,results){
if (error){
    console.log(error);
}
else(console.log(results))
object=results;

}
