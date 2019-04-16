
import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'

export default class NavLinkBar extends React.Component{

	static propTypes = {
		data: PropTypes.array.isRequired
	}
	// 底部
	render(){
		const navList = this.props.data.filter(v=>!v.hide)
		const { pathName } = this.props
		return (
			<TabBar>
				
			</TabBar>
		)
	}
}