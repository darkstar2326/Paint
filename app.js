var lastX = "";
var lastY = "";
var currentX = "";
var currentY = "";
var pen_width =2;
var color = "black";
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var mouseEvent = "";
var erase;
var newBtn;
var link;


function colorval() {
    colorvalue = document.getElementById("colordrp").value;
    color = colorvalue;
}

function thickval() {
    thickvalue = document.getElementById("thickdrp").value;
    pen_width = thickvalue;
}

function download(){
    image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
     link = document.createElement('a');
    link.download = "my-drawing.png";
    link.href = image;
    link.click();
  }


// Eraser
function erase(){
    ctx.globalCompositeOperation = 'destination-out';
     newBtn = document.createElement("button");
    newBtn.innerHTML="Back to Pen";
    newBtn.addEventListener("click" , backtopen);
    var myDiv = document.getElementById("buttons-group").appendChild(newBtn);
    if (eraserbtn.style.display === "none") {
        eraserbtn.style.display = "block";
        
      } else {
        eraserbtn.style.display = "none";
        thickdrp.style.display = "none";
        colordrp.style.display = "none";
        pen_width = 15;
      }
}

function backtopen(){
    ctx.globalCompositeOperation = "source-over";
    if (newBtn.style.display === "none") {
        newBtn.style.display = "block";
      } else {
        newBtn.style.display = "none";
        eraserbtn.style.display = "block";
        thickdrp.style.display = "block";
        colordrp.style.display = "block";
        pen_width = document.getElementById("thickdrp").value;
      }
}



// Reset canvas
var resetCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height)

canvas.addEventListener("mousedown" , mouse_down);

function mouse_down(e){
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove" , mouse_move);

function mouse_move(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.lineWidth = pen_width;
        ctx.strokeStyle = color;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke(); 
    }
    lastX = currentX;
    lastY = currentY;
}

canvas.addEventListener("mouseleave" , mouse_leave);

function mouse_leave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup" , mouse_up);

function mouse_up(e){
    mouseEvent = "mouseup   ";
}