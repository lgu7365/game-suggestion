import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games`;

function Slider(props) {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const [slider, setSlider] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(URL+props.tag);
        setData(response.data);
      } catch(e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div>로딩 중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return (
    <div className="slider">
      <div className="section-title">{props.name}</div>
      <div className="gm-box">
        <ul className="gm-list" style={{transform: `translateX(${slider}%)`}}>
          {data.slice(0, 10).map(data => (
              <li key={data.id}>
                <Link to="#">
                <img src={data.thumbnail} alt="썸네일" />
                <div className="game-title">{data.title}</div>
                <div className="dateandflatform">{data.release_date} ・ {data.platform}</div>
                <div className="game-genre">{data.genre}</div>
                <div className="game-developer">{data.developer}</div>
                </Link>
              </li>
          ))}
        </ul>
      </div>
      {prev ? <div className="prev" onClick={prevbutton}><i className="fa-solid fa-chevron-left"></i></div> : ''}
      {next ? <div className="next" onClick={nextbutton}><i className="fa-solid fa-chevron-right"></i></div> : ''}
    </div>
  )
}

export default Slider;