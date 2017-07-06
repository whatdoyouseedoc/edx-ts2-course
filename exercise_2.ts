class colorChange {
    div: Element;

    constructor(div: Element) {
        this.div = div;
    }

    changeColor(color: string): boolean {
        (this.div as HTMLElement).style.backgroundColor = color;

        return true;
    }
}

interface ElementSet {
    div: Element,
    button: Element
}

enum Colors {
    Green,
    Red,
    Blue,
    Orange
}

let elementSet: Array<ElementSet> = [];

let squareSizeNum: number = 100;

let squareSize: string = `${squareSizeNum}px`;

for (let index: number = 0; index < 4; index ++) {
    elementSet.push({
        div: document.createElement('div'),

        button: document.createElement('button')
    });
}

elementSet.map((elem, index) => {
    let colorChangeClass = new colorChange(elem.div);

    (elem.div as HTMLElement).style.width = squareSize;

    (elem.div as HTMLElement).style.height = squareSize;

    elem.button.textContent = 'Change color';

    (elem.button as HTMLElement).onclick = () => {
        colorChangeClass.changeColor(Colors[index]);
    }

    document.body.appendChild(elem.button);

    document.body.appendChild(elem.div);
});