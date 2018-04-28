var calApp = angular.module('calculatorApp',[]);
calApp.controller("calController", function($scope){
    $scope.firstNumber = 0;
    $scope.secondNumber = 0;
    $scope.operation = "+";
    $scope.operations = ["+", "-", "*", "/", "^", "√"];
    $scope.result = 0;
    $scope.errorMessage = "";
    $scope.showResult = "Result : ";

    $scope.updateResult = function() {

        if (isNaN($scope.firstNumber) || isNaN($scope.secondNumber)){
            //as html textbox accepts "+" and "-" as numbers (the numbers can be change to positive or negative according to the sign given)
            // so need to validate if user enter for example "+++" or "-" only as input as it will
            $scope.result = "";
            $scope.errorMessage = "Please enter valid numbers into the textbox given.";
            return;
        }

        switch ($scope.operation) {
            case "+":
                //$scope.result = $scope.firstNumber + " + " + $scope.secondNumber + " = " + addition($scope.firstNumber, $scope.secondNumber);
                $scope.result = addition($scope.firstNumber, $scope.secondNumber);
                $scope.errorMessage = "";
                break;
            case "-":
                //$scope.result = $scope.firstNumber + " - " + $scope.secondNumber + " = " + subtraction($scope.firstNumber, $scope.secondNumber);
                $scope.result = subtraction($scope.firstNumber, $scope.secondNumber);
                $scope.errorMessage = "";
                break;
            case "*":
                //$scope.result = $scope.firstNumber + " * " + $scope.secondNumber + " = " + multiplication($scope.firstNumber, $scope.secondNumber);
                $scope.result = multiplication($scope.firstNumber, $scope.secondNumber);
                $scope.errorMessage = "";
                break;
            case "/":
                //$scope.result = $scope.firstNumber + " / " + $scope.secondNumber + " = " + division($scope.firstNumber, $scope.secondNumber);
                $scope.result = division($scope.firstNumber, $scope.secondNumber);
                $scope.errorMessage = "";
                //if (division($scope.firstNumber, $scope.secondNumber) === "error"){
                if ($scope.result === "error"){
                    $scope.result = "";
                    $scope.errorMessage = "Division by 0 is undefined. Please enter a non-zero value for the second number.";
                }
                break;
            case "^":
                //$scope.result = $scope.firstNumber + " ^ " + $scope.secondNumber + " = " + squareBy($scope.firstNumber, $scope.secondNumber);
                $scope.result = squareBy($scope.firstNumber, $scope.secondNumber);
                $scope.errorMessage = "";
                if ($scope.result === "error"){
                    $scope.result = "";
                    $scope.errorMessage = "Square by function does not accept number with decimals for the second number. Please enter an integer for the second number or use the square root function.";
                }
                break;
            case "√":
                $scope.result = squareRoot($scope.firstNumber, $scope.secondNumber);
                $scope.errorMessage = "";
                //if (squareRoot($scope.secondNumber) === "error"){
                if ($scope.result === "error"){
                    $scope.result = "";
                    $scope.errorMessage = "Negative number cannot be square rooted. Please enter a positive number to the second number.";
                }
                break;
            default:
                $scope.result = "";
                $scope.errorMessage = "Please enter your values and select an operation to perform the calculation";
                break;
        }

        $scope.showResult = "Result :   "+ $scope.firstNumber + " " + $scope.operation + " " + $scope.secondNumber + " = " + $scope.result;
    }
});