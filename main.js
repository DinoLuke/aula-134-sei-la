var VideoLegalzinhoAleatorio = "";

function preload() {

VideoLegalzinhoAleatorio = createVideo("video.mp4");
}

function setup() {

canvas = createCanvas(480, 380);
canvas.center();
VideoLegalzinhoAleatorio.hide();
}

function draw() {

image(VideoLegalzinhoAleatorio, 0, 0, 480, 380);
}

function START() {

ObjectDetector = ml5.objectDetector("cocossd", modelload);
document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelload() {

console.log("modelo aleatorio");
statusModelo = true;
VideoLegalzinhoAleatorio.loop();
VideoLegalzinhoAleatorio.speed(1);
VideoLegalzinhoAleatorio.volume(20);
}