import React,{ Component } from 'react'

import './index.less';

export default class ProductItem extends Component {

    render() {
        const { item } = this.props
        return (
        <div className='product-item'>
                <img src={`http://project-static.gongwlin.cn/${item.img}.jpg`} alt='商品图片' style={{height: 60,width: 60}}/>

                <div className='product-center'>
                    <span className='product-loc'>{item.productloc}</span>
                    <div>{item.productname}</div>
                    <div className='productid'>{item.productid}</div>
                    <span>库存: {item.count}</span>
                    <span>规格: {item.unit}</span>
                </div>

                <div className='product-right'>
                    <span className='product-count'>X{item.pickcount || 1}</span>
                    <span className='pick-btn pick-btn-active'>已拣</span>
                </div>
        </div>)
    }
}