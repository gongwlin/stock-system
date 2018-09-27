import React, { Component } from 'react'
import NewsListBlock from "../components/Spot/NewsListBlock";
export default class SpotContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        < NewsListBlock type="top" count="10"/>
      </div>
    )
  }
}
