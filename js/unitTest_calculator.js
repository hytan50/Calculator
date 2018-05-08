describe('Controller', function () {    //describe object type
    beforeEach(module('calculatorApp'));    //load module
    describe('calController',function () {
        var calController, $scope;

        beforeEach(inject(function($rootScope, $controller){    //instantiate controller using $controller service
            //calController = $controller('calController');
            $scope = $rootScope.$new();
            calController = $controller('calController', {$scope: $scope})
        }));

        // tests start here
        describe("$scope attributes' default value", function(){
            it('should set the default value of first number, second number and result to 0', function () {
                expect($scope.firstNumber).toEqual(0);
                expect($scope.secondNumber).toEqual(0);
                expect($scope.result).toEqual(0);
            });

            it('default value for operation is "+"', function(){
                expect($scope.operation).toEqual("+");
            });

            it('default value of error message is empty string', function () {
                expect($scope.errorMessage).toEqual("");
            });
        });

        describe('$scope.updateResult', function () {

            it('first number and second number should be a valid number', function(){
                $scope.firstNumber = "++";
                $scope.secondNumber = 0;
                $scope.updateResult();
                expect($scope.result).toEqual("");
                expect($scope.errorMessage).toEqual("Please enter valid numbers into the textbox given.");

                $scope.firstNumber = 0;
                $scope.secondNumber = "--";
                $scope.updateResult();
                expect($scope.result).toEqual("");
                expect($scope.errorMessage).toEqual("Please enter valid numbers into the textbox given.");
            });

            describe('Addition function', function(){
                it('Addition of 3 and 2 should be 5', function(){
                    $scope.firstNumber = 3;
                    $scope.secondNumber = 2;
                    $scope.operation = "+";
                    $scope.updateResult();
                    expect($scope.result).toEqual(5);
                    expect($scope.errorMessage).toEqual("");
                });
            });

            describe('Subtraction function', function(){
                it('Subtraction of 3 from 5 should be 2', function(){
                    $scope.firstNumber = 5;
                    $scope.secondNumber = 3;
                    $scope.operation = "-";
                    $scope.updateResult();
                    expect($scope.result).toEqual(2);
                    expect($scope.errorMessage).toEqual("");
                });
            });

            describe('Multiplication function', function(){
                it('Multiplication of 3 and 2 should be 6', function(){
                    $scope.firstNumber = 3;
                    $scope.secondNumber = 2;
                    $scope.operation = "*";
                    $scope.updateResult();
                    expect($scope.result).toEqual(6);
                    expect($scope.errorMessage).toEqual("");
                });
            });

            describe('Division function', function(){
                it('6 divide by 2 should be 3', function (){
                    $scope.firstNumber = 6;
                    $scope.secondNumber = 2;
                    $scope.operation = "/";
                    $scope.updateResult();
                    expect($scope.result).toEqual(3);
                    expect($scope.errorMessage).toEqual("");
                });

                it("Division of 0 should be error", function(){
                    $scope.firstNumber = 3;
                    $scope.secondNumber = 0;
                    $scope.operation = "/";
                    $scope.updateResult();
                    expect($scope.result).toEqual("");
                    expect($scope.errorMessage).toEqual("Division by 0 is undefined. Please enter a non-zero value for the second number.");
                });
            });

            describe('Square By function', function(){
                it('3 square by 2 should be 9', function(){
                    $scope.firstNumber = 3;
                    $scope.secondNumber = 2;
                    $scope.operation = "^";
                    $scope.updateResult();
                    expect($scope.result).toEqual(9);
                    expect($scope.errorMessage).toEqual("");
                });

                it('any number square by 0 should be 1', function(){
                    $scope.firstNumber = 3;
                    $scope.secondNumber = 0;
                    $scope.operation = "^";
                    $scope.updateResult();
                    expect($scope.result).toEqual(1);
                    expect($scope.errorMessage).toEqual("");
                });

                it('2 square by -2 should be 0.25', function(){
                    $scope.firstNumber = 2;
                    $scope.secondNumber = -2;
                    $scope.operation = "^";
                    $scope.updateResult();
                    expect($scope.result).toEqual(0.25);
                    expect($scope.errorMessage).toEqual("");
                });
            });

            describe('Square root function', function(){
                it('square root 0 should be 0', function(){
                    $scope.secondNumber = 0;
                    $scope.operation = "√";
                    $scope.updateResult();
                    expect($scope.result).toEqual(0);
                    expect($scope.errorMessage).toEqual("");
                });

                it('square root 9 should be 3', function(){
                    $scope.firstNumber = 1;
                    $scope.secondNumber = 9;
                    $scope.operation = "√";
                    $scope.updateResult();
                    expect($scope.result).toEqual(3);
                    expect($scope.errorMessage).toEqual("");
                });

                it('square root 2 should be 1.414', function(){
                    $scope.firstNumber = 1;
                    $scope.secondNumber = 2;
                    $scope.operation = "√";
                    $scope.updateResult();
                    expect($scope.result).toEqual(1.414);
                    expect($scope.errorMessage).toEqual("");
                });

                it('2 * square root 9 should be 6', function(){
                    $scope.firstNumber = 2;
                    $scope.secondNumber = 9;
                    $scope.operation = "√";
                    $scope.updateResult();
                    expect($scope.result).toEqual(6);
                    expect($scope.errorMessage).toEqual("");
                });

                it('2 * square root 2 should be 2.828', function(){
                    $scope.firstNumber = 2;
                    $scope.secondNumber = 2;
                    $scope.operation = "√";
                    $scope.updateResult();
                    expect($scope.result).toEqual(2.828);
                    expect($scope.errorMessage).toEqual("");
                });

                it('square root negative number should be error', function(){
                    $scope.firstNumber = 1;
                    $scope.secondNumber = -1;
                    $scope.operation = "√";
                    $scope.updateResult();
                    expect($scope.result).toEqual("");
                    expect($scope.errorMessage).toEqual("Negative number cannot be square rooted. Please enter a positive number to the second number.");
                });
            });
        });
    });
});