function setup(){
    canvas = createCanvas(350, 400);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth= window.speechSynthesis;
}
function Clear(){
    background("white");

}
function preload(){
classifier = ml5.imageClassifier("DoodleNet");
}
function draw(){
    strokeWeight(9);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
        
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResults);

}
function gotResults(error,results){
    if(error){console.error(error)}
    console.log(results)
    document.getElementById("Label").innerHTML="Label: "+results[0].label;
    document.getElementById("Confidence").innerHTML="Confidence: " + Math.round(results[0].confidence*100) + "%";
    utterThis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis)
}