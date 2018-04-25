
const mathFunctions = document.createElement('script');
mathFunctions.src = 'functions.js';
document.head.appendChild(mathFunctions);

//unit test for function "addition"
function testAddition(){

    if (addition(2, 3) !== 5){
        //throw new Error("Addition of 2 and 3 gives 5, but the addition function gives " + addition(2, 3));
        document.getElementById("testAdditionResult").innerHTML = "Addition of 2 and 3 gives 5, but the addition function gives " + addition(2, 3);
    }
    else{
        document.getElementById("testAdditionResult").innerHTML = "test passed";
    }
}

//unit test for function "subtraction"
function testSubtraction(){
    if (subtraction(5, 2) !== 3){
        //throw new Error("Subtraction of 2 from 5 gives 3, but the subtraction function gives " + subtraction(5, 2));
        document.getElementById("testSubtractionResult").innerHTML = "Subtraction of 2 from 5 gives 3, but the subtraction function gives " + subtraction(5, 2);
    }
    else{
        document.getElementById("testSubtractionResult").innerHTML = "test passed";
    }
}

//unit test for function "multiplication"
function testMultiplication(){
    if (multiplication(2, 3) !== 6){
        //throw new Error("Multiplication of 2 and 3 gives 6, but the multiplication function gives " + multiplication(2, 3));
        document.getElementById("testMultiplicationResult").innerHTML = "Multiplication of 2 by 3 gives 6, but the multiplication function gives " + multiplication(2, 3);
    }
    else{
        document.getElementById("testMultiplicationResult").innerHTML = "test passed";
    }
}

//unit test for function "division"
function testDivision(){
    if (division(10, 2) !== 5){
        //throw new Error("10 divided by 2 gives 5, but the division function gives "+ division(10, 2));
        document.getElementById("testDivisionResult").innerHTML = "10 divided by 2 gives 5, but the division function gives " + division(10, 2);
    }
    else{
        document.getElementById("testDivisionResult").innerHTML = "test passed";
    }
}

function testSquareBy(){
    if (squareBy(10, 2) !== 100){
        document.getElementById("testSquareByResult").innerHTML = "10 square by 2 gives 100, but the square by function gives " + squareBy(10, 2);
    }
    else if (squareBy(5, 0) !== 1){
        document.getElementById("testSquareByResult").innerHTML = "5 square by 0 gives 1, but the square by function gives " + squareBy(5, 0);
    }
    else{
        document.getElementById("testSquareByResult").innerHTML = "test passed";
    }
}

function testSquareRoot(){
    if (squareRoot(9) !== 3){
        document.getElementById("testSquareRootResult").innerHTML = "Square root of 9 is 3, but the square root function gives " + squareRoot(9);
    }
    else if (squareRoot(2) !== 1.4142){
        document.getElementById("testSquareRootResult").innerHTML = "Square root of 2 is 1.4142, but the square root function gives " + squareRoot(2);
    }
    else if (squareRoot(-1) !== "error"){
        document.getElementById("testSquareRootResult").innerHTML = "-1 is invalid as an input for square root, but the square root function gives " + squareRoot(-1);
    }
    else{
        document.getElementById("testSquareRootResult").innerHTML = "test passed";
    }

}

testAddition();
testSubtraction();
testMultiplication();
testDivision();
testSquareBy();
testSquareRoot();