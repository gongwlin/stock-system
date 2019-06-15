import React,{ Component } from 'react'
import './index.less';
import Http from '../../Http'
import { message } from 'antd';

export default class DeliveryOrderItem extends Component {
    deliveryDone = async () => {
        const orderid = this.props.item.orderid
        console.log(orderid)
        const json = await Http.post({
            url: '/order/deliverorder',
            params: {
                orderid
            }
        })

        if(json.code === 0){
            message.success('操作成功')
            this.props.getList && this.props.getList()
        } else {
            message.error( json.msg || '操作失败,请重试!')
        }

    }
    render() {
        const { item } = this.props
        const { customerinfo, orderid, note='无'} = item 
        const orderIdStart = orderid.slice(0, -4)
        const orderIdEnd = orderid.slice(-4)
        return (
        <div className='delivery-orderitem'>
                <div className='orderitemid'>
                    <span>{orderIdStart}</span>
                    <span className='hightlight'>{orderIdEnd}</span>
                </div>
                <ul className='customerinfo'>
                    <li className='name'>顾客姓名:{customerinfo.customername}</li>
                    <li className='address'>收货地址:{customerinfo.customeraddress}</li>
                    <li>备注:{note || '无'}</li>
                </ul>

                <div className='buttons'>
                    <button className='contact' onClick={() => window.location.href = `tel:${customerinfo.customerphone}` }>联系顾客</button>
                    <button className='deliveryDone' onClick={this.deliveryDone}>已送达</button>
                </div>
        </div>)
    }
}