import * as React from 'react';
import { Component } from 'react';

export default class MpadString extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="padString">
            <h1>padString</h1>
            <p>This method can be used to add padding Left-side (Before) or Right-side (After) of the given string based on given pad character and length.</p>
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
                        <td>string | number</td>
                        <td>Required. Any value.</td>
                    </tr>
                    <tr>
                        <td>position</td>
                        <td>"LEFT" | "RIGHT"</td>
                        <td>Required. Position, where to add padding</td>
                    </tr>
                    <tr>
                        <td>padChar</td>
                        <td>string</td>
                        <td>Required. Single string character to be used for padding.</td>
                    </tr>
                    <tr>
                        <td>len</td>
                        <td>number</td>
                        <td>Required. Length of the padding.</td>
                    </tr>
                </tbody>
            </table>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Example 1: Left padding to String
 */
padString('secretCode', 'LEFT', '$', 4); // Outputs "$$$$secretCode"

/**
 * Example 2: Right padding to String
 */
padString('localbot', 'RIGHT', 'A', 2); // Outputs "localbotAA"

/**
 * Example 3: Right padding to Number
 */
padString(15268, 'RIGHT', '0', 5); // Outputs "1526800000"`}
                </code>
            </pre>
        </article>);
    }
};