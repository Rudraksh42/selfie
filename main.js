var SpeechRecognition= window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();



function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();

}

recognition.onresult=function run(event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);

if(content=="take my selfie"){
console.log("take my selfie");
speak();//Function Call//

 }
}

function speak(){
var synth=window.speechSynthesis;
speak_data= "taking your selfie in 5 second";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
takeSnapShot();
Save();
}
,5000
);
}

camera=document.getElementById("camera");
Webcam.set({

 width:360,
 height:300,
 image_format: 'png',
 png_quality:90

});

function takeSnapShot(){
   Webcam.snap(function (data_uri)
   {
       document.getElementById("output").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
   }
   );  
}

function Save(){
    var link = document.getElementById("link");
    var img  = document.getElementById("selfie_image");
    link.href= img;
    link.click();
}