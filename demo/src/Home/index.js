import React, { Component, Fragment } from 'react';

import Head from './component/Head';
import Head1 from './component/Head1';
import Footer from './component/Footer';
import { Link, Route, Switch } from 'react-router-dom';

const AA = () => {
    return <div>
        <Link  to='/a/b' >点击GO BB</Link>
        <Route path='/a/b' component={BB} />
    </div>
}

const BB = () => <h1>BBBB</h1>
export default class App extends Component {

    render() {
        return (
            <Fragment>
                <Head />
                <Footer />
                <ul>
                    <li><Link to='/example' >查看example</Link></li>
                    <li><Link to='/a' >Go a</Link></li>
                </ul>       
                {/* <Switch> */}
                    <Route path='/a' component={AA} />
                    <Route path='/example' component={Head1}/>
                {/* </Switch> */}
            </Fragment>
        );
    }
}
