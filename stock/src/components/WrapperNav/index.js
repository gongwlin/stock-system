// this is a HOC

import React,{ Component, Fragment } from 'react'
import NavLeft from '../NavLeft'
import { Icon } from 'antd'

const WrapperNav = (Comp) => class extends Component {
    state = {visible: false}

    toggle = () => {
        const { visible } = this.state
        this.setState({visible:!visible})
    }
    renderNav = () => {
        const { visible } = this.state
        return (
             <Fragment>
                <div className='mobile-header'>
                    <Icon type='bars' style={{ marginLeft: 15 }} onClick={this.toggle} />
                </div>
                <div style={{ marginTop: 40, zIndex: 999, position: 'fixed', width: '100vw' }} >
                    {visible && <NavLeft hidelogo={true} closeMenu={() => this.setState({ visible: false })}/>}
                </div>
            </Fragment>
        )
    }
    render() {
        const isPc = window.innerWidth > 768 
        return (
            <Fragment>
                {!isPc && this.renderNav()}
                <Comp {...this.props} />
            </Fragment>
        )
    }
}
export default WrapperNav