import React from 'react';

export default class Icon extends React.PureComponent {
    
    render() {
        const iconList = {
            wx: 'icon-weixin', 
            'close-eye': 'icon-eye1', 
            eye: 'icon-eye', 
            zfb: 'icon-umidd17', 
            tongji: 'icon-tongji', 
            jiechu: 'icon-jiechuchuku', 
            ruku: 'icon-jieruruku', 
            tag: 'icon-tag', 
            gift: 'icon-liwu', 
            house: 'icon-zhufang', 
            rili: 'icon-rili', 
            jiaotong:'icon-jiaotong', 
            eat: 'icon-canyin', 
            map: 'icon-ditu', 
            share: 'icon-share', 
            redpacket: 'icon-redpacket', 
            game: 'icon-game', 
            shopping: 'icon-goods', 
            delete: 'icon-delete', 
            setting: 'icon-settings', 
            form: 'icon-form', 
            more: 'icon-more', 
            pay: 'icon-pay', 
            taxi: 'icon-taxi', 
            edit: 'icon-edit', 
            close: 'icon-close'
        }

        const { type, size = 20 } = this.props
        if (!iconList[type]) return ''
        return (
            <i className={`iconfont ${iconList[type]}`} style={{ fontSize: size}}></i>
        )
    }
}