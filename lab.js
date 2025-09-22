//buttons at bottom

//task 1
function task1() {
    const quantity = prompt("Enter a number for the quantity");
    const quantityTag = document.querySelector(".quantity");


    quantityTag.innerHTML = `Quantity: ${quantity}`;


    //part b
    const percent = prompt("Enter a percentage: ");
    quantityTag.innerHTML = `${percent}% of the Quantity, ${quantity}, is ${quantity * percent / 100}`;
}
//task 2
function task2() {
    const grade = parseInt(prompt("Enter a grade between 1-100: "), 10);
    const gradeTag = document.querySelector(".grade");
    //part a
    let ifComputedGrade;


    if (grade >= 91 && grade <= 100) {
        ifComputedGrade = "A";
    } else if (grade < 91 && grade >= 81) {
        ifComputedGrade = "B";
    } else if (grade < 81 && grade >= 71) {
        ifComputedGrade = "C";
    } else if (grade < 71 && grade >= 61) {
        ifComputedGrade = "D";
    } else if (grade < 61 && grade >= 0) {
        ifComputedGrade = "F";
    } else {
        alert("Enter a number between 0-100");
    }


    //part b (switch true to check against a range of values)
    let SwitchComputedGrade;
    switch (true) {
        case grade >= 91 && grade <= 100:
            SwitchComputedGrade = "A";
            break;
        case grade >= 81 && grade < 91:
            SwitchComputedGrade = "B";
            break;
        case grade >= 71 && grade < 81:
            SwitchComputedGrade = "C";
            break;
        case grade >= 61 && grade < 71:
            SwitchComputedGrade = "D";
            break;
        case grade >= 0 && grade < 61:
            SwitchComputedGrade = "F";
            break;
        default:
            alert("Enter a number between 0-100");
    }


    gradeTag.innerHTML = `The Grade is: (a) ${ifComputedGrade}, (b) ${SwitchComputedGrade}`;
}
//task 3
function task3() {
    const profName = prompt("Enter the name of a punishing professor");
    const lineToWrite = prompt("Enter a line for the user to write");
    const numberToWrite = parseInt(prompt("How many times should the user enter the line?"));

    console.log(profName);
    for (let i = 1; i <= numberToWrite; i++) {
        console.log(i + " " + lineToWrite);
    }
}



//task 4
function task4() {
    const profName = prompt("Enter the name of a punishing professor");
    const lineToWrite = prompt("Enter a line for the user to write");
    const numberToWrite = parseInt(prompt("How many times should the user enter the line?"));
    const potterTag = document.querySelector(".potter");
    const profTag = document.querySelector(".professor");

    let punishmentString = "";
    let i = 1;
    while (i <= numberToWrite) {
        punishmentString += `<li>${lineToWrite}</li>`;
        i++;
    }
    profTag.innerHTML = profName;
    potterTag.innerHTML = punishmentString;
}


//task 5
//note i don't call it here but it gets called when the corresponding button is clicked
const task5 = () => {
    const profName = prompt("Enter the name of a punishing professor");
    const lineToWrite = prompt("Enter a line for the user to write");
    const numberToWrite = parseInt(prompt("How many times should the user enter the line?"));
    const potterTag = document.querySelector(".potter");
    const profTag = document.querySelector(".professor");

    let punishmentString = "";
    let i = 1;
    while (i <= numberToWrite) {
        punishmentString += `<li>${lineToWrite}</li>`;
        i++;
    }
    profTag.innerHTML = profName;
    potterTag.innerHTML = punishmentString;
}


//task 6
//part a
function task6() {
    let firstFactor = 10;
    let secondFactor = 6;

    for (let i = 1; i <= secondFactor; i++) {
        let product = `${firstFactor} X ${i} = ${firstFactor * i}`;
        console.log(product);
    }
    console.log("-------------------");


    //part b
    for (let i = 1; i <= 12; i++) {
        createTimesTable(firstFactor, i);
    }

    //create a times table based on 2 factors
    function createTimesTable(firstFactor, secondFactor) {
        let product = `${firstFactor} X ${secondFactor} = ${firstFactor * secondFactor}`;
        console.log(product)
    }
    console.log("-------------------");


    //part c
    const allTables = (delimiter) => {
        for (let factor = 1; factor <= 12; factor++) {
            createFullTimesTable(factor, delimiter);
        }
    };

    function createFullTimesTable(firstFactor, delimiter) {
        for (let i = 1; i <= delimiter; i++) {
            let product = `${firstFactor} X ${i} = ${firstFactor * i}`;
            console.log(product)
        }
    }

    allTables(5);

}


//task 7
function task7() {
    let z = 10;
    let v = 5;

    //hoisting function, using the function before its declared; only works with function declaration
    foo(z, v);

    function foo(x, y) {
        console.log(x + y);
    }

    // I spent an hour figuring out why if you have a var called 'name',
    // it actually gets assigned and is not undefined as expected. Apparently browsers have a predefined var 'name'
    // property so it actually gets assigned, I love JS.

    //when you declare a variable it gets 'hoisted' to the top of the scope, this means that JS recognizes that the variable exists
    //no matter where you call that variable, even if you call it before its declared or initialized, however it will remain undefined until
    //the program gets to the line where its declared/initialized.
    //also only vars get fully hosted, consts and lets will go to some death zone until they get declared.

    console.log(name1); //will be 'undefined' because var name1 is hoisted, and assigned undefined until the line where the var is actually initialized
    var name1 = "Luke";

    /*
    With many functions (function declaration, arrow functions, iife, so on) and different ways to 
    declare variables (var, let, const), JS needed a way to ensure consistency, The ECMA was created 
    for this purpose and defines what functions/ variables are hoisted and how they are hoisted.
    */
}

//buttons to call tasks
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");


button1.addEventListener("click", task1);
button2.addEventListener("click", task2);
button3.addEventListener("click", task3);
button4.addEventListener("click", task4);
button5.addEventListener("click", task5);
button6.addEventListener("click", task6);
button7.addEventListener("click", task7);

