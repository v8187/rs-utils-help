/**
 * Configurable Options
 */
export const groupedMethods = [{
    label: 'Formatters',
    methods: [
        { id: 'toTitleCase', label: 'toTitleCase' },
        { id: 'xToNum', label: 'xToNum' },
        { id: 'padString', label: 'padString' }
    ]
}, {
    label: 'Helpers',
    methods: [
        { id: 'setUID', label: 'setUID' },
        { id: 'fireWindowResize', label: 'fireWindowResize' },
        { id: 'selectContent', label: 'selectContent' },
        { id: 'syntaxHighlight', label: 'syntaxHighlight' },
        { id: 'deepCopy', label: 'deepCopy' },
        { id: 'deepMergeObject', label: 'deepMergeObject' },
        { id: 'mergeObject', label: 'mergeObject' },
        { id: 'swapNumbers', label: 'swapNumbers' },
    ]
}, {
    label: 'Type Checking',
    methods: [
        { id: 'isDate', label: 'isDate' },
        { id: 'isNull', label: 'isNull' },
        { id: 'isUndefined', label: 'isUndefined' },
        { id: 'isTrue', label: 'isTrue' },
        { id: 'isFalse', label: 'isFalse' },
        { id: 'isString', label: 'isString' },
        { id: 'isPureNumber', label: 'isPureNumber' },
        { id: 'isNumber', label: 'isNumber' },
        { id: 'isFloat', label: 'isFloat' },
        { id: 'isPureFloat', label: 'isPureFloat' },
        { id: 'isInteger', label: 'isInteger' },
        { id: 'isPureInteger', label: 'isPureInteger' },
        { id: 'isRegex', label: 'isRegex' },
        { id: 'isArray', label: 'isArray' },
        { id: 'isObject', label: 'isObject' },
        { id: 'isEmptyObject', label: 'isEmptyObject' }
    ]
}, {
    label: 'List Utils',
    methods: [
        { id: 'sortByKey', label: 'sortByKey' },
        { id: 'findByField', label: 'findByField' }
    ]
}, {
    label: 'Random',
    methods: [
        { id: 'randomItem', label: 'randomItem' },
        { id: 'randomNum', label: 'randomNum' }
    ]
}];

export const unGroupedMethods: any = [];

groupedMethods.map(dTypes => {
    unGroupedMethods.push(...dTypes.methods);
});

unGroupedMethods.sort((a, b) => {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
});