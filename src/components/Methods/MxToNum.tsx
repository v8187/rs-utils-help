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
            <p>This method can be used to generate random number between given numbers range.</p>
            <h2>Params</h2>
            {/* <p>It does not have any options to customize the output.</p> */}
            <p>It provides following options to configure:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Required / Optional</th>
                        <th>Type</th>
                        <th>Default value</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>format</td>
                        <td>Optional</td>
                        <td>string</td>
                        <td>&lt;empty string&gt;</td>
                        <td>a => lowercase letter <br />
                            A => uppercase letter <br />
                            X => digit <br /></td>
                    </tr>
                </tbody>
            </table>
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