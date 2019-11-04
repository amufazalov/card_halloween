var canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 300;

//для рисования нужен контекст (2d графика)
var context = canvas.getContext('2d');
//заливка цветом
var gradient = context.createLinearGradient(0,0,400,300);
gradient.addColorStop(0, 'red'); //x0 - y0
gradient.addColorStop(1, 'white'); //x1 - y1
context.fillStyle = gradient;
//context.fillStyle = 'red';
context.fillRect(0,0,400,300);

//рисуем линии
context.beginPath();
context.moveTo(0,0);
context.lineTo(400,0);
context.moveTo(0,300);
context.lineTo(400,300);
context.stroke();

//Рисуем окружности
context.beginPath();
context.arc(50,50,30,0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.arc(300,50,30,0, Math.PI, true)
context.stroke();

//Текст
context.fillStyle = "black";
context.font = "30px Arial";
context.fillText("Airat Mufazalov", 50, 150);

//Картинко
var img = document.getElementById("logo");
context.drawImage(img,50,200);