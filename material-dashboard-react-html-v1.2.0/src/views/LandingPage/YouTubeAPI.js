import React, { Component } from 'react';
import YoutubeReact from 'youtube-player-react'

class App extends Component {
  constructor() {
    super()
    this.state = {
        videoid:"", listType:"playlist", list:"PL1DD10E84B9B08A35", loop: 0, autoplay: 1, height: 424, width: 1140
    }
    this.applyToPlayer = this.applyToPlayer.bind(this);
  }

  applyToPlayer() {
    let videoid = this.videoid.value;
    let listType = this.listType.value;
    let list = this.list.value;
    let loop = this.loop.value;
    let height = this.height.value;   
    let width = this.width.value;   
    let currentState = this.state;
    this.setState({ 
        videoid:videoid, listType: listType, list: list, loop: parseInt(loop,10), height: height, width: width, autoplay: currentState.autoplay 
    })
  }
  mute() {
    this.player.mute();
    }
    setSize(width, height) {
        this.player.setSize(1420, 1080)   
    }
  render() {
    return (
        <YoutubeReact 
          ref={(player)=>{ this.player = player }}
          videoid={this.state.videoid}
          listType={this.state.listType} 
          list={this.state.list}
          height={this.state.height}
          width={this.state.width}
          autoplay={this.state.autoplay}
          onEnded={this.onEnded} 
          onPaused={this.onPaused} 
          onPlayed={this.onPlayed} 
          onReady={this.onReady}
        />
    );
  }

}

export default App;