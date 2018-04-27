function addition(x, y){
    return x + y;
}

function subtraction(x, y){
    return x - y;
}

function multiplication(x, y){
    return x * y;
}

function division(x, y){
    //no numbers can be divided by 0
    if (y === 0){
        return "error";
    }
    return x / y;
}

function squareBy(x, y){
    //any numbers square by 0 will return 1;
    if (y === 0){
        return 1;
    }

    var i, result;
    i = y;
    result = 1;
    if (y > 0) {
        // y is positive number
        while (i > 0) {
            if (i % 2 === 0) {
                result *= x * x;
                i -= 2;
            }
            else {
                result *= x;
                i--;
            }
        }
    }
    else{
        // y is negative number
        i *= -1;
        while (i > 0) {
            if (i % 2 === 0) {
                result /= x * x;
                i -= 2;
            }
            else {
                result /= x;
                i--;
            }
        }
    }
    return result;
}

function squareRoot(x){
    //square root of 0 is 0
    if (x === 0){
        return 0;
    }

    //square root does not accept negative answers
    if (x < 0){
        return "error";
    }

    var floor, ceil, rangeFound, counter, accept;
    floor = 0;
    rangeFound = false;
    counter = 1;
    accept = false;

    //return the answer if x is a perfect square, or find the range of the possible answer
    while (!rangeFound){
        if (squareBy(counter, 2) === x){
            return counter;
        }
        else if (squareBy(counter, 2) < x){
            floor = counter;
        }
        else if (squareBy(counter, 2) > x){
            ceil = counter;
            rangeFound = true;
        }
        counter++;
    }

    //while x is not a perfect number
    var average;
    var squared;
    while (!accept){
        average = (floor + ceil)/2;
        squared = Math.round(squareBy(average, 2)*1000)/1000;
        if (squared === x){
            accept = true;
            return Math.round(average*1000)/1000;
        }
        else{
            if (squared > x){
                ceil = average;
            }
            else{
                floor = average;
            }
        }
    }

}
