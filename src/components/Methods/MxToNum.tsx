import * as React from 'react';
import { Component } from 'react';
import LinkRsUtils from '../LinkRsUtils';

export default class MxToNum extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="xToNum">
            <h1>xToNum</h1>
            <p>This method can be used to generate random number between a particular range.
                  Type can be used to generate 12 digit Aadhaar Number (Indian biometric based identity number).</p>
            <h2>Params</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Sample JSON:
 */
const aadhaarJson1 = [{
    "name": "myAdhar",
    "type": "aadhaar"
}];

// Output for 1 record:
[{ myAdhar: 458956853214 }]
`}
                </code>
            </pre>
        </article>);
    }
};