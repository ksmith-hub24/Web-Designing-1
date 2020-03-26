var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//Draw Rectangle//
//to fill the rectangle you use fillstyle
c.fillStyle="purple";
/c.fillRect(x,y,width,height);/
c.fillRect(100,200,200,100);
c.fillStyle="green";
c.fillRect(200,200,300,100);
c.fillStyle="turquoise";
c.fillRect(300,300,200,100);

//Draw Rectangle//
//to fill the rectangle you use fillstyle
c.fillStyle="purple";
/c.fillRect(x,y,width,height);/
c.fillRect(600,600,300,200);
c.fillStyle="green";
c.fillRect(600,700,300,100);


//Draw a line
c.beginPath(); // we are saying that in canvas we are going to begin a path
//c.moveTo(x,y)
c.moveTo(100,200); // where on canvas we going to being a path
c.lineTo(500,100); // untill where you want the line to be
c.strokeStyle ="#7CFC00"; //to give a color to line
c.stroke() // until you say stroke line will not popup
console.log(canvas);

//Draw a line
c.beginPath(); // we are saying that in canvas we are going to begin a path
//c.moveTo(x,y)
c.moveTo(100,200); // where on canvas we going to being a path
c.lineTo(300,300); // untill where you want the line to be
c.strokeStyle ="#7CFC00"; //to give a color to line
c.stroke() // until you say stroke line will not popup
console.log(canvas);

// Draw a circle
//c.arc(x,y,radius, startangle, endangle, drawcounterclockwise = true/false)
c.beginPath();
c.arc(200,100,30,0, Math.PI*2,false)
c.strokeStyle ="#FF1493";
c.stroke();

// Draw a circle
//c.arc(x,y,radius, startangle, endangle, drawcounterclockwise = true/false)
c.beginPath();
c.arc(500,100,70,0, Math.PI*2,false)
c.strokeStyle ="#191970";
c.stroke();

//Draw the triangle
c.beginPath();
c.moveTo(250,200);
c.lineTo(600,500);
c.lineTo(300,150);
c.closePath();

//the outline
c.lineWidth=20;
c.strokeStyle='black';
c.stroke();

//the fill color
c.fillStyle="#1E90FF";
c.fill();

//for loop example with circles
for(var i=1; i<5; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x,y,50,0, Math.PI*2,false)
  c.strokeStyle ="#BA55D3";
  c.stroke();

}
