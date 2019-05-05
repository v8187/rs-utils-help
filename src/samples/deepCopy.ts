const deepCopy = (obj: any): any => { };

const dataToBeDeepCopied = {
    scores: [{
        english: 45,
        maths: 50,
        remarks: 'good score',
    }]
};
// Create copy of the above object
const deepCopied = deepCopy(dataToBeDeepCopied);

// Change value of nested property in copied object
deepCopied.scores[0].english = 70;

// Changing value of copied object does not effect original object
console.log(deepCopied.scores[0].english); // Outputs : 70
console.log(dataToBeDeepCopied.scores[0].english); // Outputs : 45