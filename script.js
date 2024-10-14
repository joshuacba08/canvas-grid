const canvas = document.getElementById("my-canvas");
canvas.style.backgroundColor = "#000000";
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#00FF00";
ctx.lineWidth = 0.25;
ctx.fillStyle = "#009900";

for (let x = 0; x < canvas.width; x += 10) {
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
  ctx.lineWidth = x % 50 === 0 ? 0.5 : 0.25;
  ctx.stroke();
  if (x % 50 === 0) ctx.fillText(x, x, 10);
}

for (let y = 0; y < canvas.height; y += 10) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.lineWidth = y % 50 === 0 ? 0.5 : 0.25;
  ctx.stroke();
  if (y % 50 === 0) ctx.fillText(y, 0, y + 10);
}

function drawCoordinate(ctx, x, y) {
  ctx.fillStyle = "#00FF00";
  ctx.fillText(`(${x},${y})`, x, y);
}

// prueba de dibujo usando la grilla

ctx.beginPath();
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 2;
ctx.moveTo(50, 50);
drawCoordinate(ctx, 50, 50);
ctx.lineTo(150, 250);
drawCoordinate(ctx, 150, 250);
ctx.lineTo(250, 170);
drawCoordinate(ctx, 250, 170);
ctx.closePath();
ctx.stroke();

