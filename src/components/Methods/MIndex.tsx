import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import { groupedMethods } from '../../configs/methods';

const renderMethods = () => {
    return groupedMethods.map((group, i) => {
        return [
            <h3 key={`groupName${i + 1}`}>{group.label}:</h3>,
            <ul key={`groupList${i + 1}`}>{
                group.methods.map((dType, j) => {
                    return <li key={`groupItem${i}${j}`}>
                        <Link to={`${dType.id}`}>{dType.label}</Link>
                    </li>;
                })
            }</ul>
        ];
    })
}

export default class DTIndex extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<article className="methods">
            <h1>Methods</h1>
            <p>Following utility methods are available. Click on Data type to see its' details</p>
            {renderMethods()}
        </article>);
    }
};