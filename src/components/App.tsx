import * as React from 'react';
import { Component, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Prism from 'prismjs';

import '../scss/index.scss';
import { unGroupedMethods } from '../configs/methods';
import Sidebar from './Sidebar';
import Loading from './Loading';
import Page404 from './Page404';
import Introduction from './Introduction';
const Methods = lazy(() => import('./Methods'));

const methodRoutes = ['/methods'].concat(...unGroupedMethods.map(route => `/${route.id}`));

export default class App extends Component {

    onRouteChange() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div className='app'>
                <h1>@v8187/rs-utils Guide</h1>
                <Sidebar />
                <article className='content-pane'>
                    <Router>
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                <Route exact={true} path={['/', '/intro']} component={Introduction} />
                                {<Route
                                    path={methodRoutes}
                                    render={(props) => <Methods
                                        {...props}
                                        onMount={this.onRouteChange} />}
                                />}
                                <Route component={Page404} />
                            </Switch>
                        </Suspense>
                    </Router>
                </article>
            </div>
        );
    }
};