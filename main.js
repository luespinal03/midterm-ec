

function twoSmallest(banana) {
    let answer = [];
    if (banana.length < 2) {
        return undefined;
    }

    for (let i = 0; i < banana.length; i++) {
        for (let b = i + 1; b < banana.length; b++) {
            if(banana[i] > banana[b]) { // leaves 1 alone,
                let temp = banana[i];// 300 // turns temp into 300, 
                banana[i] =  banana[b]; // turns banana[i] from 300 into 69 
                banana[b] = temp; // gives temp the value of 69
            }
        }
        }
        answer.push(banana[0]);
        answer.push(banana[1]);
    return answer;
}

console.log(twoSmallest([1, 300, 69, 278])); // 1,55
console.log(twoSmallest([7, 3])); // 3,7
console.log(twoSmallest([7])); // undefined

