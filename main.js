function twoSmallest(banana) {
    let smallestNumber = 100;
    let largestNumber = 0;
    // let secondSmallestNumber = smallestNumber;
    let restOfArray = [];
    let largestFromRestOfArray = 0;
    let smallestFromRestOfArray = 100;
    let answers = [];

    if (banana.length < 2) {
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


    // finds the middle number
    for (let i = 0; i < restOfArray.length; i++) {
        if (restOfArray[i] === smallestNumber || restOfArray[i] === largestNumber) {
            continue;

        } else if (restOfArray[i] > largestFromRestOfArray) {
            largestFromRestOfArray = restOfArray[i];

        } else if(restOfArray[i] < smallestFromRestOfArray) 
            smallestFromRestOfArray = restOfArray[i];
    }

    answers.push(smallestNumber)
    answers.push(smallestFromRestOfArray);
    return answers;

}

console.log(twoSmallest([10, 2, 6, 7, 5])) // 2,5