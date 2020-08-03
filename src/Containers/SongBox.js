import React, {Component} from "react"
import SongList from "../Components/SongList"

class SongBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error())
  }

  render(){
    return (
      <div className="song-box">
        <h1 className="title">The UK Top 20 Chart</h1>
        <SongList songs={this.state.songs}/>
      </div>
    )
  }

}

export default SongBox;
