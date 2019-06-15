import React, { Suspense, lazy }  from 'react';
import { Switch, Route, Redirect, HashRouter  } from 'react-router-dom'
// import asyncComponent from './asyncComponent'

import Login from '../pages/Login'
import Register from '../pages/Register'
import HomeWrap from '../pages/HomeWrap'

import Delivery from '../pages/Delivery'
import WaittingPurchase from '../pages/WaittingPurchase'
import ProductLocation from '../pages/ProductLocation'
import StaffManage from '../pages/StaffManage'
import StockList from '../pages/StockList'
import ProductIntoStock from '../pages/ProductIntoStock'
import AccountSetting from '../pages/AccountSetting'
import Bar from '../pages/DataTable/Bar'
import Pie from '../pages/DataTable/Pie'
import Line from '../pages/DataTable/Line'
import Order from '../pages/Order'
import PickOrder from '../pages/PickOrder'

// const PickOrder =  lazy(() => import('../pages/PickOrder'))
// const Delivery = lazy(() => import('../pages/Delivery'))
// const WaittingPurchase =  lazy(() => import('../pages/WaittingPurchase'))
// const ProductLocation = lazy(() => import('../pages/ProductLocation'))
// const StaffManage = lazy(() => import('../pages/StaffManage'))
// const StockList =  lazy(() => import('../pages/StockList'))
// const ProductIntoStock = lazy(() => import('../pages/ProductIntoStock'))
// const AccountSetting = lazy(() => import('../pages/AccountSetting'))
// const Bar = lazy(() => import('../pages/DataTable/Bar'))
// const Pie = lazy(() => import('../pages/DataTable/Pie'))
// const Line = lazy(() => import('../pages/DataTable/Line'))
// const Order = lazy(() => import('../pages/Order'))

// const PickOrder = asyncComponent(() => import(/* webpackChunkName: "PickOrder" */ '../pages/PickOrder'))
// const Delivery = asyncComponent(() => import(/* webpackChunkName: "Delivery" */ '../pages/Delivery'))
// const WaittingPurchase = asyncComponent(() => import(/* webpackChunkName: "WaittingPurchase" */ '../pages/WaittingPurchase'))
// const ProductLocation = asyncComponent(() => import(/* webpackChunkName: "ProductLocation" */ '../pages/ProductLocation'))
// const StaffManage = asyncComponent(() => import(/* webpackChunkName: "StaffManage" */ '../pages/StaffManage'))
// const StockList = asyncComponent(() => import(/* webpackChunkName: "StockList" */ '../pages/StockList'))
// const ProductIntoStock = asyncComponent(() => import(/* webpackChunkName: "ProductIntoStock" */ '../pages/ProductIntoStock'))
// const AccountSetting = asyncComponent(() => import(/* webpackChunkName: "AccountSetting" */ '../pages/AccountSetting'))
// const Bar = asyncComponent(() => import(/* webpackChunkName: "Bar" */ '../pages/DataTable/Bar'))
// const Pie = asyncComponent(() => import(/* webpackChunkName: "Pie" */ '../pages/DataTable/Pie'))
// const Line = asyncComponent(() => import(/* webpackChunkName: "Line" */ '../pages/DataTable/Line'))
// const Order = asyncComponent(() => import(/* webpackChunkName: "Order" */ '../pages/Order'))


function Routes() {
    return (
        <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path="/" render={() =>
                        <HomeWrap>
                            <Switch>
                                <Route path='/delivery' component={Delivery} />
                                <Route path='/pickorder' component={PickOrder} />
                                <Route path='/waittingpurchase' component={WaittingPurchase} />
                                <Route path='/productlocaltion' component={ProductLocation} />
                                <Route path='/staffmanage' component={StaffManage} />
                                <Route path='/stocklist' component={StockList} />
                                <Route path='/productintostock' component={ProductIntoStock} />
                                <Route path='/accountsetting' component={AccountSetting} />
                                <Route exact path='/datatable' component={Line} />
                                <Route path='/datatable/bar' component={Bar} />
                                <Route path='/datatable/line' component={Line} />
                                <Route path='/datatable/pie' component={Pie} />
                                <Route path='/orders' component={Order} />
                                
                            </Switch>
                        </HomeWrap>
                        } 
                    />
                </Switch>
    </HashRouter>)
}


export default Routes