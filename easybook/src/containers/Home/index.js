import React, { Component, Fragment } from 'react';
import { Header,Content} from '../../components'


export default class Home extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Content />
                {/* <div className="">this is Home</div> */}
            </Fragment>
        )
    }
}