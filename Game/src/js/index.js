// import '../css/index.css'
import PuzzlePicture from './PuzzlePicture.js';
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output = slider.value;

const puzzlePicture = new PuzzlePicture(
    document.querySelector('#puzzle-wrapper'),
    'http://cs.pikabu.ru/images/jobseeker/logo2.png',
    400,
    output
);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var container = document.querySelector('#wrapper');


slider.addEventListener('input',(e) => {
    setTiming();
});
window.addEventListener('load',(e) => {
    setTiming();
});

function setTiming() {
    let timeout = null;
    clearTimeout(timeout);

    output = slider.value;
    puzzlePicture.setDimension(output);
    puzzlePicture.cells = [];
    removeAllChildNodes(container);
    puzzlePicture.setup();
    timeout = setTimeout(() => {
        puzzlePicture.cells = [];
        removeAllChildNodes(container);
        puzzlePicture.setup(2);
        // alert("Hello");
    }, 1000);
}








