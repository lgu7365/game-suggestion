import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games?sort-by=popularity`;

function Popular() {
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
    <div className="populargm">
      <ul className="populargm-list">
        {data.slice(0, 10).map(data => (
          <li key={data.id}>
            <Link to={'/detailinfo/id=' + data.id}>
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

export default Popular