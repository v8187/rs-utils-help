import * as React from 'react';
import { Component } from 'react';

export default class MmergeObject extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="mergeObject">
            <h1>mergeObject</h1>
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
                    {`const mergeObject1 = {
    scores: [{
        english: 45,
        maths: 50,
        remarks: 'good score'
    }]
};

const mergeObject2 = {
    scores: [{
        history: 89,
        humanities: 50,
        remarks: 'good score. Keep it up.'
    }]
};

const mergeObject3 = {
    scores: [{
        chemistry: 90,
        drawing: 100,
        remarks: 'well done'
    }]
};

// Merge mergeObject2 into mergeObject1
const deepMerged1 = mergeObject(mergeObject1, mergeObject2);

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

// Merge mergeObject2 & mergeObject3 into mergeObject1
const deepMerged2 = mergeObject(mergeObject1, mergeObject2, mergeObject3);

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