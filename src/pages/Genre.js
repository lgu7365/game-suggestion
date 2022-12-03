import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games`;

function Genre() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(URL);
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
    <div className="genre">
      <div className="select-box">
        <label htmlFor="genre">genre:</label>
        <select name="genre-select" id="genre">
          <option value="mmorpg">MMORPG</option>
          <option value="shooter">Shooter</option>
          <option value="moba">MOBA</option>
          <option value="anime">Anime</option>
          <option value="battle-royale">Battle Royale</option>
          <option value="strategy">Strategy</option>
          <option value="fantasy">Fantasy</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="card-games">Card Games</option>
          <option value="racing">Racing</option>
          <option value="fighting">Fighting</option>
          <option value="social">Social</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      <ul className="genre-list">
        {data.slice(0, 10).map(data => (
          <li key={data.id}>
            <Link to="#">
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