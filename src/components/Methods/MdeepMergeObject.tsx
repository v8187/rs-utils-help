import * as React from 'react';
import { Component } from 'react';

export default class MdeepMergeObject extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="deepMergeObject">
            <h1>deepMergeObject</h1>
            <p>Returns a merged Object from given N number of objects.
 <br />Last object gets merged into object before it and it will continue untill all objects get merged into first one.</p>
            <h2>Params</h2>
            <p>It accepts following arguments:</p>
            <table>
                <thead>
                    <tr>
                        <th>Params</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>target</td>
                        <td>Object</td>
                        <td>Required. JavaScript Object</td>
                    </tr>
                    <tr>
                        <td>sources</td>
                        <td>Object</td>
                        <td>Required. JavaScript Object</td>
                    </tr>
                </tbody>
            </table>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript">
                    {`const deepMergeObject1 = {
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
} */`}
                </code>
            </pre>
        </article>);
    }
};