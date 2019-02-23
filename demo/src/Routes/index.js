import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home'
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
        </Switch>
    )
}