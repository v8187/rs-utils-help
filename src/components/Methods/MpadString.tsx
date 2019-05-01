import * as React from 'react';
import { Component } from 'react';

export default class MpadString extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="padString">
            <h1>padString</h1>
            <p>This method can be used to convert first character of each word to Uppercase in given sentence.</p>
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
                        <td>Required. Any string value.</td>
                    </tr>
                </tbody>
            </table>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Example 1:
 */
padString('this is sample line'); // Outputs "This Is Sample Line"

/**
 * Example 2:
 */
padString('BLA BLA'); // Outputs "Bla Bla"`}
                </code>
            </pre>
        </article>);
    }
};