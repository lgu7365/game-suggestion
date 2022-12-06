import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games?`;

function Genre() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [genre, setGenre] = useState('');
  const [genrevalue, setGenrevalue] = useState('');
  const [platform, setPlatform] = useState('');
  const [pfvalue, setPfvalue] = useState('');

  const changegenre = (e) => {
    setGenrevalue(e.target.value);
    if(e.target.value === ''){
      setGenre('');
    } else {
      setGenre('category='+e.target.value);
    }
  }
  const changeplatform = (e) => {
    setPfvalue(e.target.value);
    if(e.target.value === ''){
      setPlatform('');
    } else {
      if(genre === ''){
        setPlatform('platform='+e.target.value);
      } else {
        setPlatform('&platform='+e.target.value);
      }
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(URL+genre+platform);
        setData(response.data);
      } catch(e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [genre, platform]);
  if (loading) return <div>로딩 중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return (
    <div className="genre">
      <div className="select-box">
        <label htmlFor="genre">Genre:</label>
        <select name="genre-select" id="genre" onChange={changegenre} value={genrevalue}>
          <option value="">All Genres</option>
          <option value="mmorpg">MMORPG</option>
          <option value="shooter">Shooter</option>
          <option value="moba">MOBA</option>
          <option value="anime">Anime</option>
          <option value="battle-royale">Battle Royale</option>
          <option value="strategy">Strategy</option>
          <option value="fantasy">Fantasy</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="card">Card Games</option>
          <option value="racing">Racing</option>
          <option value="fighting">Fighting</option>
          <option value="social">Social</option>
          <option value="sports">Sports</option>
        </select>
        <label htmlFor="platform">Platform:</label>
        <select name="platform-select" id="platform" onChange={changeplatform} value={pfvalue}>
          <option value="">All</option>
          <option value="pc">PC</option>
          <option value="browser">Browser</option>
        </select>
      </div>
      <ul className="genre-list">
        {data.slice(0, 10).map(data => (
          <li key={data.id}>
            <Link to={'/detailinfo/' + data.id}>
            <img src={data.thumbnail} alt="썸네일" />
            <div className="game-content">
              <div className="game-title">{data.title}</div>
              <div className="game-description">{data.short_description}</div>
              <div className="dateandflatform">{data.release_date} ・ {data.platform}</div>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Genre