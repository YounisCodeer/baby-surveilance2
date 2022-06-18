img = "";
status = "";
objcets = [];
function preload(){
    img = loadImage('baby.webp')
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}
function draw() {
    image(img, 0, 0, 640, 420);

        if(status != "")
        {
            for (i = 0; i < objects.length; i++)
            {
                document.getElementById("status").innerHTML = "Status : Objcet Detected";

                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%",objects[i].x+15, objects[i].y+15);
                nofill();
                stroke("#ff0000");
                rect(objcets[i].x, objcets[i].y, objcets[i].width, objcets[i].height);
            }
        }
    fill("#FF0000")
    text("Baby", 45, 75);
    nofill();
    stroke("#FF0000");
}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
        }
        console.log(results);
        objcets = results;
    }