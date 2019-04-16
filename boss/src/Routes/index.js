import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../containers/Login'
import BossInfo from '../containers/BossInfo'
import GeniusInfo from '../containers/GeniusInfo'
import Register from '../containers/Register'
// import Auth from '../containers/Auth'

class Routes extends Component {
    render() {
        return (
            <div>
                {/* <Auth /> */}
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/geniusinfo' component={GeniusInfo} />
                <Route path='/bossinfo' component={BossInfo} />
            </div>
        )
    }
}

export default Routes