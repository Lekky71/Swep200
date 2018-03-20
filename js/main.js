window.addEventListener('load',(event)=> {
    let input = document.getElementById('input');
    let hold = document.getElementById('hold');
    let output = document.getElementById('output');

    let addButton = document.getElementById("add");
    let minusButton = document.getElementById("minus");
    let multiplyButton = document.getElementById("multiply");
    let divideButton = document.getElementById("divide");

    let sinButton = document.getElementById("sin");
    let cosButton = document.getElementById("cos");
    let tanButton = document.getElementById("tan");
    let arcTanButton = document.getElementById("arctan");

    let arcSinButton = document.getElementById("arcsin");
    let arcCosButton = document.getElementById("arccos");
    let sinhButton = document.getElementById("sinh");
    let coshButton = document.getElementById("cosh");

    let tanhButton = document.getElementById("tanh");
    let sqrtButton = document.getElementById("sqrt");
    let powerButton = document.getElementById("power");
    let logButton = document.getElementById("log");

    let clearButton = document.getElementById("clear");
    let equalsButton = document.getElementById("equals");

    sinButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            console.log("finding the sin button");
            setOutput(Math.sin(getInput()));
        }


    });
    cosButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.cos(getInput()));
        }


    });
    tanButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.tan(getInput()));
        }


    });
    arcTanButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.atan(getInput()));
        }


    });
    arcSinButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.asin(getInput()));
        }


    });
    arcCosButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.acos(getInput()));
        }


    });
    sinhButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.sinh(getInput()));
        }


    });
    coshButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.cosh(getInput()));
        }


    });

    tanhButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.tanh(getInput()));
        }


    });

    sqrtButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.sqrt(getInput()));
        }


    });


    logButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            setOutput(Math.log(getInput()));
        }


    });

    clearButton.addEventListener('click', (e)=> {
        if(confirmOneInput()){
            input.value = "";
            hold.value = "";
            output.value = "";
        }


    });

    let getValues = ()=> {
        let num1 = parseFloat(input.value);
        let num2 = parseFloat(hold.value.toString().substring(0, hold.value.toString().length-2));
        console.log(parseFloat(hold.value.toString().substring(0, hold.value.toString().length-2)));
        return [num2, num1];
    };

    let getInput = ()=> {
        return parseFloat(input.value);
    };

    let confirmInputs = ()=> {
        let num1 = input.value;
        let num2 = hold.value;
        if(num1 && num2){
            return true;
        }
        else {
            let num1 = hold.value;
            let num2 = input.value;
            if(!num1) alert("First number cannot be empty");
            if(!num2) alert("Second number cannot be empty");
            return false;
        }
    };

    let confirmOneInput = ()=> {
        if(input.value){
            console.log("confirming input");
            return true
        }
        else return false;
    };

    addButton.addEventListener('click', (e)=> {
        holdInput(" +");
        if(confirmOneInput()){
        }

    });

    minusButton.addEventListener('click', (e)=> {
        holdInput(" -");
        if(confirmOneInput()){
        }

    });
    multiplyButton.addEventListener('click', (e)=> {
        holdInput(" x");
        if(confirmOneInput()){
        }

    });
    divideButton.addEventListener('click', (e)=> {
        holdInput(" /");
        if(confirmOneInput()){
        }

    });

    powerButton.addEventListener('click', (e)=> {
        holdInput(" ^");
        if(confirmOneInput()){
        }


    });

    equalsButton.addEventListener('click', (e)=> {
        if(confirmInputs()){
            let op = hold.value.toString().split("")[hold.value.toString().length-1];
            if(op === "+") setOutput(parseFloat(getValues()[0]) + parseFloat(getValues()[1])).toString();
            else if(op === "-") setOutput(parseFloat(getValues()[0]) - parseFloat(getValues()[1])).toString();
            else if(op === "x") setOutput(parseFloat(getValues()[0]) * parseFloat(getValues()[1])).toString();
            else if(op === "/") setOutput(parseFloat(getValues()[0]) / parseFloat(getValues()[1])).toString();
            else if(op === "^") setOutput(Math.pow(parseFloat(getValues()[0]), parseFloat(getValues()[1])).toString());
        }


    });


    let holdInput = (op)=> {
        hold.value = input.value + op;
        input.value = "";
    };

    let setOutput = (num)=> {
        output.value = " "+ num.toString();
    }

});