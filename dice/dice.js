var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var dieSideNum = 100;
var dieSide = dieSideNum + "px";
var dieBorder = '2px solid black';
var diePadding = '10px';
var dieMargin = '10px';
var RolledValues;
(function (RolledValues) {
    RolledValues[RolledValues["One"] = 1] = "One";
    RolledValues[RolledValues["Two"] = 2] = "Two";
    RolledValues[RolledValues["Three"] = 3] = "Three";
    RolledValues[RolledValues["Four"] = 4] = "Four";
    RolledValues[RolledValues["Five"] = 5] = "Five";
    RolledValues[RolledValues["Six"] = 6] = "Six";
})(RolledValues || (RolledValues = {}));
var getRandomIntValue = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var Die = (function () {
    function Die(element) {
        this.element = element;
    }
    return Die;
}());
var DieRoller = (function (_super) {
    __extends(DieRoller, _super);
    function DieRoller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DieRoller.prototype.rollDie = function () {
        this.value = getRandomIntValue(1, 6);
        this.element.textContent = RolledValues[this.value];
    };
    return DieRoller;
}(Die));
var dice = [];
var diceItselfs = [];
for (var i = 0; i < 5; i++) {
    dice.push({
        element: document.createElement('div')
    });
}
dice.map(function (item, index) {
    var currentDie = new DieRoller(item.element);
    currentDie.element.style.height = dieSide;
    currentDie.element.style.width = dieSide;
    currentDie.element.style.border = dieBorder;
    currentDie.element.style.padding = diePadding;
    currentDie.element.style.margin = dieMargin;
    currentDie.value = getRandomIntValue(1, 6);
    currentDie.element.textContent = RolledValues[currentDie.value];
    document.body.appendChild(currentDie.element);
    diceItselfs.push(currentDie);
});
var DieRollerButton = (function () {
    function DieRollerButton(element) {
        this.element = element;
        this.element.textContent = 'Roll the Dice!';
    }
    DieRollerButton.prototype.roll = function (dice) {
        dice.map(function (item) {
            item.rollDie();
        });
    };
    return DieRollerButton;
}());
var button = document.createElement('button');
var dieRollerButton = new DieRollerButton(button);
dieRollerButton.element.onclick = function (event) {
    dieRollerButton.roll(diceItselfs);
};
document.body.appendChild(dieRollerButton.element);
