import * as React from 'react';
import { Component } from 'react';
import { Location } from 'history';

import MIndex from './MIndex';
import Page404 from '../Page404';

import MdeepCopy from './MdeepCopy';
import MpadString from './MpadString';
import MtoTitleCase from './MtoTitleCase';
import MxToNum from './MxToNum';

export interface IMethodeP {
    location: Location;
    onMount?: () => void;
};

export default class Method extends Component<IMethodeP> {

    render() {
        console.log('props', this.props);
        const pathname = this.props.location.pathname.replace(/\//, '');

        switch (pathname) {
            case 'deepCopy': return <MdeepCopy onMount={this.props.onMount} />;
            case 'padString': return <MpadString onMount={this.props.onMount} />;
            case 'toTitleCase': return <MtoTitleCase onMount={this.props.onMount} />;
            case 'xToNum': return <MxToNum onMount={this.props.onMount} />;
            case 'methods': return <MIndex />;
            default: return <Page404 />;
        }
    }
};