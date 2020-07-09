import Cell from './Cell.js'

export default class PuzzlePicture {
    constructor(el,imgSrc, width,dimension){
        this.parentEl = el;
        this.imageSrc = imgSrc;
        this.width = width;

        this.cells=[];
        this.dimentions = dimension;

        this.init();

        const img = new Image();
        img.onload = () => {
            console.log(img.width, img.height);
            this.height = img.height * this.width / img.width;
            this.el.style.width = `${this.width}px`;
            this.el.style.height = `${this.height}px`;

            this.setup();

        };
        img.src = this.imageSrc;


    }

    setDimension(dimension){
        this.dimentions = dimension;
    }
    getDimension(){
        return this.dimentions;
    }

    init(){
        this.el = this.createWrapper();
        this.parentEl.appendChild(this.el);
    }

    createWrapper(){
        const div = document.createElement('div');
        div.style.position = 'relative';
        div.style.margin = '0 auto';
        div.style.background = '#D0D0D0';
        div.setAttribute("id","wrapper");


        return div;
    }
    deleteChildNodes(){

    }

    setup(argument){
        for (let i=0; i < this.dimentions * this.dimentions ; i++){
            this.cells.push(new Cell(this,i));
        }
        if (argument === undefined || argument % 2 === 1){
            this.assembledPuzzle();
        } else {
            this.shuffle();
        }
        console.log(argument % 2 === 1);

    }

    shuffle() {
        for (let i = this.cells.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            this.swapCell(i,j);

        }
    }
    swapCell(i, j){
        [this.cells[i], this.cells[j]] = [this.cells[j], this.cells[i]];
        this.cells[i].setPosition(i);
        this.cells[j].setPosition(j);
        // if (this.isAssembled()){
        //     console.log("Good job");
        // }
    }

    findPosition(ind) {
        return this.cells.findIndex( cell => cell.index === ind);
    }
    findEmpty() {
        return this.cells.findIndex( cell => cell.isEmpty);
    }

    // isAssembled() {
    //     for (let i=0;i<this.cells.length;i++){
    //         if (i !== this.cells[i].index) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    assembledPuzzle() {
        for (let i = this.cells.length - 1; i > 0; i--) {
            const j = this.cells[i].index;
            this.swapCell(i,j);

        }
    }

}
