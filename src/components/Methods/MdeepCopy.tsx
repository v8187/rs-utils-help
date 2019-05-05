import * as React from 'react';
import { Component } from 'react';

export default class MdeepCopy extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="deepCopy">
            <h1>deepCopy</h1>
            <p>This method can be used to create a copy of given JavaScript Object.</p>
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
                        <td>objData</td>
                        <td>Object</td>
                        <td>Required. JavaScript Object with any complexity.</td>
                    </tr>
                </tbody>
            </table>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Example 1:
 */
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
console.log(dataToBeDeepCopied.scores[0].english); // Outputs : 45`}
                </code>
            </pre>
        </article>);
    }
};