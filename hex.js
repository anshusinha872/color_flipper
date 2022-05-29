const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
console.log(btn);
console.log(color);

btn.addEventListener('click', function () {
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandomNumber()];
        console.log(`Random Index : ${getRandomNumber()}`);
        console.log(`hex color : ${hexcolor}`);
    }
    color.textContent = hexcolor;
    document.body.style.background = hexcolor;
});
function getRandomNumber() {
    return Math.floor(Math.random()*100)%hex.length;
}
