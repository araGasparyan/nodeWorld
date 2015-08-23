/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */







////////////////////////////////////////////////////////////

var secondforclock=new Date().getSeconds();
var minute=new Date().getMinutes();
var hour=new Date().getHours();

var usehour=(hour%12)*5;

//console.log(hour);
//console.log(usehour);

var secondarrowlength=85;
var minutearrowlength=70;
var hourarrowlength=55;


var ob2=document.getElementById("myCanvas2");
var ob3=document.getElementById("myCanvas3");
var ob4=document.getElementById("myCanvas4");
var ctx2 = ob2.getContext("2d");
var ctx3 = ob3.getContext("2d");
var ctx4 = ob4.getContext("2d");

//a();
//b();

setInterval(function(){
   ctx2.beginPath();
    ctx2.clearRect(0, 0, 212, 212);
    secondstep(ctx2,106,106,secondforclock);
    
     
     ctx2.strokeStyle = "#FF0000";
    ctx2.stroke();
    
}, 100);



setInterval(function(){
   ctx3.beginPath();
    ctx3.clearRect(0, 0, 212, 212);
    minutestep(ctx3,106,106,minute);
    
    
     ctx3.strokeStyle = "blue";
    ctx3.stroke();
    
}, 100);


setInterval(function(){
   ctx4.beginPath();
    ctx4.clearRect(0, 0, 212, 212);
    hourstep(ctx4,106,106,usehour);
    
    
     ctx4.strokeStyle = "green";
     
    ctx4.stroke();
    
}, 100);




function secondstep(context, fromX, fromY, angle){
    context.moveTo(fromX, fromY);
    toX=secondarrowlength*Math.cos(Math.PI/2-angle*Math.PI/30)+106;
    toY=106-secondarrowlength*Math.sin(Math.PI/2-angle*Math.PI/30);
   // console.log(toX);
    context.lineTo(toX, toY);
    secondforclock=new Date().getSeconds();
   
    }

    
      function minutestep(context, fromX, fromY, angle){
    context.moveTo(fromX, fromY);
  
    if((secondforclock<=1)||(secondforclock>=57)){toX=minutearrowlength*Math.cos(Math.PI/2-angle*Math.PI/30-59*Math.PI/1800)+106;
    toY=106-minutearrowlength*Math.sin(Math.PI/2-angle*Math.PI/30-59*Math.PI/1800);
//console.log(minute);
//    console.log(secondforclock);

}
    else{
         minute=new Date().getMinutes();
         angle=minute;
    toX=minutearrowlength*Math.cos(Math.PI/2-angle*Math.PI/30-secondforclock*Math.PI/1800)+106;
    toY=106-minutearrowlength*Math.sin(Math.PI/2-angle*Math.PI/30-secondforclock*Math.PI/1800);

    }      
    context.lineTo(toX,toY);
    }
    

function hourstep(context, fromX, fromY, angle){
    context.moveTo(fromX, fromY);
  
    if((minute<=0)||(minute>=59)){toX=hourarrowlength*Math.cos(Math.PI/2-angle*Math.PI/30-59*Math.PI/360)+106;
    toY=106-hourarrowlength*Math.sin(Math.PI/2-angle*Math.PI/30-59*Math.PI/360);
//console.log(usehour);
 //   console.log(minute);

}
    else{
         usehour=(new Date().getHours()%12)*5;
         angle=usehour;
    toX=hourarrowlength*Math.cos(Math.PI/2-angle*Math.PI/30-minute*Math.PI/360)+106;
    toY=106-hourarrowlength*Math.sin(Math.PI/2-angle*Math.PI/30-minute*Math.PI/360);

    }      
    context.lineTo(toX,toY);
    }
    
    
    
    ///////////////////////////////////////////////////////////////////////////////
    
    
   