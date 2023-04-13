const text = document.getElementById('IDDD');
const color = document.getElementById('color');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
red.style.color = 'red';
blue.style.color = 'blue';
green.style.color = 'green';





red.addEventListener('click', function () {
    text.style.color = 'red';
    text.style.backgroundColor = 'yellow';
    color.innerHTML = "red";
})
blue.addEventListener('click', function () {
    text.style.color = 'blue';
    text.style.backgroundColor = 'gray';
    color.innerHTML = "blue";
})
green.addEventListener('click', function () {
    text.style.color = 'green';
    text.style.backgroundColor = 'lightgreen';
    color.innerHTML = "green";
})
