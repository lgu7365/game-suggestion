import React, { useState } from "react";

function Slider(props) {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const [slider, setSlider] = useState(0);

  const prevbutton = () => {
    setNext(true);
    setSlider(pre => pre + 33.3);
    if(slider === -33.3){
      setPrev(false);
    }
  }
  const nextbutton = () => {
    setPrev(true);
    setSlider(pre => pre - 33.3);
    if(slider === -199.8){
      setNext(false);
    }
  }
  return (
    <>
      <div className="section-title">{props.name}</div>
      <div className="gm-box">
        <ul className="gm-list" style={{transform: `translateX(${slider}%)`}}>
          {props.data.map(data => (
            <li key={data.id}>
              <img src={data.thumbnail} alt="썸네일" />
              <div className="game-title">{data.title}</div>
              <div className="dateandflatform">{data.release_date} ・ {data.platform}</div>
              <div className="game-genre">{data.genre}</div>
              <div className="game-developer">{data.developer}</div>
            </li>
          ))}
        </ul>
        {prev ? <div className="prev" onClick={prevbutton}><i className="fa-solid fa-chevron-left"></i></div> : ''}
        {next ? <div className="next" onClick={nextbutton}><i className="fa-solid fa-chevron-right"></i></div> : ''}
      </div>
    </>
  )
}

export default Slider;