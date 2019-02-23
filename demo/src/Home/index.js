import React, { Component, Fragment } from 'react';

import Head from './Head';
import Content from './Content';
// import Head1 from './component/Head1';
import Footer from './Footer';
import './index.css';
// import { Link, Route, Switch } from 'react-router-dom';

// const AA = () => {
//     return <div>
//         <Link  to='/a/b' >点击GO BB</Link>
//         <Route path='/a/b' component={BB} />
//     </div>
// }
// const MyInfo = () => <div>hello!this is myinfo page</div>


// const BB = () => <h1>BBBB</h1>
export default class App extends Component {

    render() {
        return (
            <Fragment>
                <div className='home-container'>
                    <Head />
                    <Content />
                    <Footer />
                </div>

                {/* <ul>
                    <li><Link to='/example' >查看example</Link></li>
                    <li><Link to='/a' >Go a</Link></li>
                </ul> */}

            </Fragment>
        );
    }
}

/**
 * 组件列表：
 * 下拉刷新
 * 上拉加载
 * 
 * 回到顶部
 */