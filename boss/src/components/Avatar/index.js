
import React, { Component } from 'react'
import { Grid, List } from 'antd-mobile'

export default class Avatar extends Component {
    state = {
        avatar: ''
    }
    handleSelectAvatar = (val) => {
        console.log(val)
        this.setState({avatar: val})
    }
    render() {
        const data = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',').map(val => ({ icon: require(`../../img/${val}.png`), text: val }))
        const { avatar } = this.state
        const header = avatar ? <div>
            <span>已选择头像</span>
            <img src={require(`../../img/${avatar}.png`)} width={20} height={20} alt='avatar' />
        </div> : <p>请选择头像</p>
        return (
            <List
                renderHeader={() => header}
            >
                <Grid data={data}
                    columnNum={5}
                    onClick={ (val) => {
                        this.handleSelectAvatar(val.text)
                        this.props.selectAvatar(val.text)
                    }}
                    renderItem={item => (
                        <div>
                            <img src={item.icon} alt="avatar" key={item.icon} />
                            <p style={{ textAlign: 'center' }}>{item.text}</p>
                        </div>
                    )}
                />
            </List>
        )
    }
}