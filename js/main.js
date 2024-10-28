drawGridSystem();

// Set line options
ctx.strokeStyle = "#FFF";
ctx.lineWidth = 30;

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(300, 200);

// Line Caps
ctx.lineCap = "round";

// new line
ctx.lineTo(200, 50);
// Line Joins
ctx.lineJoin = "round";

ctx.closePath();

ctx.stroke();
