var colorChange = (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChange;
}());
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Orange"] = 3] = "Orange";
})(Colors || (Colors = {}));
var elementSet = [];
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
for (var index = 0; index < 4; index++) {
    elementSet.push({
        div: document.createElement('div'),
        button: document.createElement('button')
    });
}
elementSet.map(function (elem, index) {
    var colorChangeClass = new colorChange(elem.div);
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.button.textContent = 'Change color';
    elem.button.onclick = function () {
        colorChangeClass.changeColor(Colors[index]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
