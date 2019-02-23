import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home'
import MyInfo from '../Myinfo'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/myinfo' component={MyInfo} />
            {/* <Route path='/detail' component={} /> */}
            {/* <Route path='/edit' component={} /> */}
            {/* <Route path='/additem' component={} /> */}
        </Switch>
    )
}