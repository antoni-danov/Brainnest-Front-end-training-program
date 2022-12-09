import * as mathFunctions from './calculations.js';
function main() {
    const mathSigns = [1, 2, 3, '/', 4, 5, 6, 'x', 7, 8, 9, '-', '.', 0, '=', '+', 'C', 'Del'];
    var currentValue = {
        a: '',
        function: '',
        b: '',
        result: ''
    };

    var main = elementFactory('main', 'container', '');
    var section = elementFactory('section', 'displaySection', '');
    var div = elementFactory('div', 'display', '0');
    var buttonSection = elementFactory('section', 'buttonSection', '');

    for (let index = 0; index <= mathSigns.length - 1; index++) {
        var button = elementFactory('button', 'btn btn-info', mathSigns[index]);
        button.addEventListener('click', (event) => {

            const value = event.target.textContent;

            if (value === 'C') {
                resetValues();
            } else if (value === 'Del') {
                correction();
            } else {
                operate(value);
            }

        });

        buttonSection.appendChild(button);
    }

    section.appendChild(div);
    main.appendChild(section);
    main.appendChild(buttonSection);
    document.body.appendChild(main);

    function elementFactory(type, className, text) {
        var element = document.createElement(type);
        element.className = className;
        element.textContent = text;
        return element;
    }
    function operate(value) {
        if (/[0-9]/.test(value)) {
            if (currentValue.function) {
                currentValue.b = currentValue.b ? currentValue.b += value : currentValue.b = value;
                div.textContent = currentValue.a + currentValue.function + currentValue.b;
            } else {
                div.textContent = currentValue.a ? div.textContent += value : div.textContent = value;
                currentValue.a = currentValue.a ? currentValue.a += value : currentValue.a = value;
            }
        } else if (value == '.') {
            if (!currentValue.function) {
                currentValue.a += value;
            } else {
                currentValue.b += value;
            }
            div.textContent += value;
        } else if (!currentValue.function && value != '=') {
            currentValue.function = value;
            div.textContent = currentValue.a + currentValue.function;
        }
        else if (value === '=') {
            findMathFunction(currentValue.a, currentValue.b, currentValue.function);
            div.textContent = currentValue.result;
        }
    }
    function findMathFunction(a, b, operation) {
        var numA = parseFloat(a);
        var numB = parseFloat(b);

        if (operation == '+') {
            currentValue.result = mathFunctions.add(numA, numB);
            setNewValue();
        } else if (operation == '-') {
            currentValue.result = mathFunctions.substract(numA, numB);
            setNewValue();
        } else if (operation == 'x') {
            currentValue.result = mathFunctions.multiply(numA, numB);
            setNewValue();
        } else if (operation == '/') {
            currentValue.result = mathFunctions.divide(numA, numB);
            setNewValue();
        }
    }
    function resetValues() {
        div.textContent = 0;
        currentValue.a = 0;
        currentValue.b = 0;
        currentValue.function = '';
        currentValue.result = 0;
    }
    function correction() {
        if (!currentValue.function) {
            currentValue.a = currentValue.a.slice(0, - 1);

            div.text = currentValue.a.length == 0 ? div.textContent = 0 : div.textContent = currentValue.a;
        } else if (currentValue.b.length >= 1 && currentValue.function) {
            currentValue.b = currentValue.b.slice(0, - 1);
            div.textContent = currentValue.a + currentValue.function + currentValue.b;
        }
        else if (currentValue.function.length == 1 && currentValue.b.length == 0) {
            currentValue.function = '';
            div.textContent = currentValue.a;
        }
    }
    function setNewValue() {
        currentValue.a = currentValue.result;
        currentValue.b = 0;
        currentValue.function = '';
    }
}
main();