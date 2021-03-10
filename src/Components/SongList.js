import React from "react"
import Song from "./Song"

const SongList = (props) => {

  const songs = props.songs.map((song, index) => {
    if(props.songs){
      return(
        <Song key={index} chartPosition={index + 1} artist={song["im:artist"].label} title={song["im:name"].label} image={song["im:image"][2].label} preview={song.link[1].attributes.href}/>
      )
    }
  })

  return(
    <div className="song-list">
      {songs}
    </div>
  );

}

export default SongList;
