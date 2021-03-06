import * as React from 'react';
import { Component } from 'react';

export default class MxToNum extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="xToNum">
            <h1>xToNum</h1>
            <p>This method can be used to convert all <span className="tag">x</span> to random number in given string.<br />
                Rest of the characters in given string returned as it is.</p>
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
                        <td>value</td>
                        <td>string</td>
                        <td>Required. Any string containing <span className="tag">x</span> in it to be converted into random number.</td>
                    </tr>
                </tbody>
            </table>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Numbers Only:
 */
xToNum('xxxx'); // Outputs 4589

/**
 * Mixed characters:
 */
xToNum('IDxxxx'); // Outputs ID4589`}
                </code>
            </pre>
        </article>);
    }
};