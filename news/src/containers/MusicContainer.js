import React, { Component } from 'react'
import {MusicDetail} from '../components/Music/MusicDetail'

export default class MusicContainer extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>
           <MusicDetail/>
      </div>
    )
  }
}
