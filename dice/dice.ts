let dieSideNum: number = 100;

let dieSide: string = `${dieSideNum}px`;

let dieBorder = '2px solid black';

let diePadding = '10px';

let dieMargin = '10px';

enum RolledValues {
    One = 1,
    
    Two,
    
    Three,
    
    Four,
    
    Five,
    
    Six
}

let getRandomIntValue: Function = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface DieType {
    element: Element
}

class Die {
    element: Element;
    
    length: number;
    
    width: number;
    
    border: string;
    
    value: number;

    constructor(element: Element) {
        this.element = element;
    }
}

class DieRoller extends Die {
    rollDie(): void {
        this.value = getRandomIntValue(1, 6);

        (this.element as HTMLElement).textContent = RolledValues[this.value];
    }
}

let dice: Array<DieType> = [];

let diceItselfs: Array<DieRoller> = [];

for (let i: number = 0; i < 5; i++) {
    dice.push({
        element: document.createElement('div')
    });
}

dice.map((item, index) => {
    let currentDie = new DieRoller(item.element);
    
    (currentDie.element as HTMLElement).style.height = dieSide;
    
    (currentDie.element as HTMLElement).style.width = dieSide;
    
    (currentDie.element as HTMLElement).style.border = dieBorder;
    
    (currentDie.element as HTMLElement).style.padding = diePadding;
    
    (currentDie.element as HTMLElement).style.margin = dieMargin;
    
    currentDie.value = getRandomIntValue(1, 6);
    
    currentDie.element.textContent = RolledValues[currentDie.value];
    
    document.body.appendChild(currentDie.element);

    diceItselfs.push(currentDie);
});

class DieRollerButton {
    element: Element;

    roll(dice: Array<DieRoller>): void {
        dice.map((item) => {
            item.rollDie();
        })
    }

    constructor(element: Element) {
        this.element = element;

        (this.element as HTMLElement).textContent = 'Roll the Dice!';
    }
}

let button = document.createElement('button');

let dieRollerButton = new DieRollerButton(button);

(dieRollerButton.element as HTMLElement).onclick = (event) => {
    dieRollerButton.roll(diceItselfs);
};

document.body.appendChild(dieRollerButton.element);