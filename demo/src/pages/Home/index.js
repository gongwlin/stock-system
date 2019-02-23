import React, { Component } from 'react';

import Head from './component/Head';
import Content from './component/Content';
// import Head1 from './component/Head1';
import Footer from './component/Footer';
import './index.css';
// import { Link } from 'react-router-dom';

// const AA = () => {
//     return <div>
//         <Link  to='/a/b' >点击GO BB</Link>
//         <Route path='/a/b' component={BB} />
//     </div>
// }
// const MyInfo = () => <div>hello!this is myinfo page</div>


// const BB = () => <h1>BBBB</h1>
export default class Home extends Component {

    render() {
        return (
            <div className='home-container'>
                <Head />
                <Content />
                <Footer />
            </div>
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