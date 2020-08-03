import React from "react";

const Song = (props) => {

  return (
    <div className="song">
      <h1 className="chart-number">No. {props.chartPosition}</h1>
      <h2>"{props.title}"</h2>
      <h3>{props.artist}</h3>
      <img src={props.image} alt="cover" border="2px solid black"/>
      <br/>
      <audio src={props.preview} type="audio/x-m4a" controls/>
    </div>
  )

}

export default Song;
