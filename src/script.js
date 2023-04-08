function getRandomColor() {
    var color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
  }
var speed = 1
setInterval(() => {
    const element = document.querySelector('h1');
    element.style.color = getRandomColor()
}, 1000*speed)