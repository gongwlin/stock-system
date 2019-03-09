import React, { Component, Fragment } from 'react';

import Head from './component/Head'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Head data={[1,2,4]}/>
            </Fragment>
        );
    }
}
