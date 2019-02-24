import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home'
import Head1 from '../pages/Home/component/Head1'
import MyInfo from '../pages/Myinfo'
import Detail from '../pages/Detail'
import Edit from '../pages/Edit'
import Account from '../pages/Account'

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/myinfo' component={MyInfo} /> 
            <Route path='/detail' component={Detail} />
            <Route path='/edit' component={Edit} /> 
            <Route path='/account' component={Account} />
            <Route path='/example' component={Head1} />
        </Switch>
    )
}