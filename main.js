function twoSmallest(banana) {
    let smallestNumber = banana[0];
    let largestNumber = banana[1];
    // let secondSmallestNumber = smallestNumber;
    let restOfArray = [];
    let largestFromRestOfArray = banana[0];
    let smallestFromRestOfArray = smallestNumber;
    let answers = [];

    if (banana.length <= 2) {
        return 'undefined';
    }
    // finds the smallest number
    for (let i = 0; i < banana.length; i++) {

        if (banana[i] < smallestNumber) {
            smallestNumber = banana[i];
        } else {
            restOfArray.push(banana[i]);
        }
    }

    // finds the largest number
    for (let i = 0; i < banana.length; i++) {
        if (banana[i] > largestNumber) {
            largestNumber = banana[i];
        } else {
            restOfArray.push(banana[i]);
        }
    }

// restOfArray = [6,7,5,6,7,5]
    // finds the middle number
    for (let i = 0; i < restOfArray.length; i++) {
        if (restOfArray[i] === smallestNumber || restOfArray[i] === largestNumber) {
            continue;
        } if (restOfArray[i] > largestFromRestOfArray) {
            largestFromRestOfArray = restOfArray[i];

        } else if(restOfArray[i] < smallestFromRestOfArray) {
            
            smallestFromRestOfArray = restOfArray[i];
            console.log(smallestFromRestOfArray)
        }
            
    }

    answers.push(smallestNumber);
    answers.push(smallestFromRestOfArray);
    return answers;

}

console.log(twoSmallest([122, 277, 409, 99, 5])); // 5,99
console.log(twoSmallest([7,3])); // undefined