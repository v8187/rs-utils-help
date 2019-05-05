const deepMergeObject = (obj: any, ...objs: any): any => { };

const deepMergeObject1 = {
    scores: [{
        english: 45,
        maths: 50,
        remarks: 'good score'
    }]
};

const deepMergeObject2 = {
    scores: [{
        history: 89,
        humanities: 50,
        remarks: 'good score. Keep it up.'
    }]
};

const deepMergeObject3 = {
    scores: [{
        chemistry: 90,
        drawing: 100,
        remarks: 'well done'
    }]
};

// Merge deepMergeObject2 into deepMergeObject1
const deepMerged1 = deepMergeObject(deepMergeObject1, deepMergeObject2);

// Outputs
/* {
    scores: [{
        english: 45,
        maths: 50,
        history: 89,
        humanities: 50,
        remarks: 'good score. Keep it up.'
    }]
} */

// Merge deepMergeObject2 & deepMergeObject3 into deepMergeObject1
const deepMerged2 = deepMergeObject(deepMergeObject1, deepMergeObject2, deepMergeObject3);

// Outputs
/* {
    scores: [{
        english: 45,
        maths: 50,
        history: 89,
        humanities: 50,
        chemistry: 90,
        drawing: 100,
        remarks: 'well done'
    }]
} */
