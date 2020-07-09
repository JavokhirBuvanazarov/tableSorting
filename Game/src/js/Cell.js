export default class Cell {
    constructor(puzzle, ind){
        this.isEmpty = false;
        this.puzzle = puzzle;
        this.index = ind;
        this.width = this.puzzle.width / this.puzzle.dimentions;
        this.height = this.puzzle.height / this.puzzle.dimentions;
        this.el = this.createDiv();

        puzzle.el.appendChild(this.el);
        if (this.index === this.puzzle.dimentions*this.puzzle.dimentions - 1){
            this.isEmpty = true;
            return;
        }
        this.setImage();

    }


    createDiv() {
        const div = document.createElement('div');



        div.setAttribute("id","child");

        div.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px `;


        div.style.position = 'absolute';
        div.style.border = '1px solid #D0D0D0';
        div.style.borderRadius = '3px';


        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;


        div.onclick = () => {
            // console.log("Click me!", this.index, this.puzzle.findPosition(this.index));
            // console.log("Empty index", this.puzzle.findEmpty());

            const currentCellIndex = this.puzzle.findPosition(this.index);
            const emptyCellIndex = this.puzzle.findEmpty();


            const {x, y} = this.getXY(currentCellIndex);
            const {x:emptyX, y:emptyY} = this.getXY(emptyCellIndex);

            console.log(x,y);
            console.log(emptyX,emptyY);

            if ((x === emptyX || y === emptyY) && ((Math.abs(y-emptyY) === 1)||(Math.abs(x-emptyX) === 1))){
                // console.log("I can swap");
                div.style.transitionDuration = '400ms';
                this.puzzle.swapCell(currentCellIndex, emptyCellIndex);
            } else {
                div.classList.add('shake')
            }

        };


        return div;
    }

    setImage(){
        const {x, y} = this.getXY(this.index);
        const left = this.width * x;
        const top = this.height * y;

        this.el.style.backgroundImage = `url(${this.puzzle.imageSrc})`;
        this.el.style.backgroundPosition = `-${left}px -${top}px`;
    }

    setPosition(index) {

        const {left, top} = this.getPositionFromIndex(index);
        this.el.style.left = `${left}px`;
        this.el.style.top = `${top}px`;

    }

    getPositionFromIndex(index) {
        const {x, y} = this.getXY(index);
        return {
            left: this.width * x,
            top: this.height * y
        }
    }
    getXY(index){
        return{
            x: index % this.puzzle.dimentions,
            y: Math.floor(index / this.puzzle.dimentions)
        }
    }
}
