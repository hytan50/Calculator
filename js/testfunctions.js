
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
        // normal test case
        document.getElementById("testDivisionResult").innerHTML = "10 divided by 2 gives 5, but the division function gives " + division(10, 2);
    }
    else if (division(10, 0) !== "error"){
        // test case : division by 0 will cause error
        document.getElementById("testDivisionResult").innerHTML = "no numbers can be divided by 0, but the division function gives " + division(10, 2);
    }
    else{
        // all test cases passed
        document.getElementById("testDivisionResult").innerHTML = "test passed";
    }
}

function testSquareBy(){
    if (squareBy(10, 2) !== 100){
        // normal test case
        document.getElementById("testSquareByResult").innerHTML = "10 square by 2 gives 100, but the square by function gives " + squareBy(10, 2);
    }
    else if (squareBy(5, 0) !== 1){
        // test case : for a^0, a can be any number, the result will still be 1
        document.getElementById("testSquareByResult").innerHTML = "5 square by 0 gives 1, but the square by function gives " + squareBy(5, 0);
    }
    else if (squareBy(2, -2) !== 0.25){
        // test case : power by negative numbers will cause division to take place
        document.getElementById("testSquareByResult").innerHTML = "2 square by -2 gives 0.25, but the square by function gives " + squareBy(2, -2);
    }
    else if (squareBy(2, 0.5) !== "error"){
        document.getElementById("testSquareByResult").innerHTML = "2 square by 0.5 should gives error as it doesn't accept non-integers for second number, but the square by function gives " + squareBy(2, 0.5);
    }
    else{
        // pass all test cases
        document.getElementById("testSquareByResult").innerHTML = "test passed";
    }

}

function testSquareRoot(){
    if (squareRoot(0, 0) !== 0){
        // test using 0
        document.getElementById("testSquareRootResult").innerHTML = "Square root of 0 is 0, but the square root function gives " + squareRoot(0, 0);
    }
    else if (squareRoot(1, 9) !== 3){
        // test using perfect square
        document.getElementById("testSquareRootResult").innerHTML = "Square root of 9 is 3, but the square root function gives " + squareRoot(1, 9);
    }
    else if (squareRoot(1, 2) !== 1.414){
        // test using the non-perfect square
        document.getElementById("testSquareRootResult").innerHTML = "Square root of 2 is 1.414, but the square root function gives " + squareRoot(1, 2);
    }
    else if (squareRoot(2, 9) !== 6){
        // test case : an integer * squareRoot( perfect square)
        document.getElementById("testSquareRootResult").innerHTML = "Square root of 2√(9) is 6, but the square root function gives " + squareRoot(2, 9);
    }
    else if (squareRoot(2, 2) !== 2.828){
        // test case : an integer * squareRoot( non-perfect square)
        document.getElementById("testSquareRootResult").innerHTML = "Square root of 2√(2) is 2.828, but the square root function gives " + squareRoot(2, 2);
    }
    else if (squareRoot(1, -1) !== "error"){
        // test case : negative number
        // should return error as there is no negative number that can be square rooted
        document.getElementById("testSquareRootResult").innerHTML = "-1 is invalid as an input for square root, but the square root function gives " + squareRoot(1, -1);
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