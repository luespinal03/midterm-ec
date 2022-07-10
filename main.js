function twoSmallest(banana) {
    let smallestNumber = banana[0];
    let largestNumber = banana[1];
    // let secondSmallestNumber = smallestNumber;
    let restOfArray = [];
    let largestFromRestOfArray = largestNumber;
    let smallestFromRestOfArray = smallestNumber;
    let answers = [];

    if (banana.length < 2) {
        return undefined;
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
//     console.log(smallestNumber); // 0
//     console.log(largestNumber); // 12
 console.log(restOfArray); // [45,14,6,14,2]
// restOfArray 
    // finds the middle number
    for (let i = 0; i < restOfArray.length; i++) {
        if (restOfArray[i] === smallestNumber || restOfArray[i] === largestNumber) {
            continue;
        } if (restOfArray[i] > largestFromRestOfArray) {
            largestFromRestOfArray = restOfArray[i];

        } else if(restOfArray[i] > smallestNumber && restOfArray[i] < largestNumber ) {
            
            smallestFromRestOfArray = restOfArray[i];
            console.log(smallestFromRestOfArray)
        } 
            
    }

    answers.push(smallestNumber);
    answers.push(smallestFromRestOfArray);
    return answers;

}

console.log(twoSmallest([45, 6, 14, 2])); // 2,6
console.log(twoSmallest([7,3])); // 3,7
console.log(twoSmallest([7])); // undefined