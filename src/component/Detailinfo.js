import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function Detailinfo() {
  const {dataId} = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const URL = `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?${dataId}`;

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
      <div className="detail">
        <div className="detail-box">
          <img src={data.thumbnail} alt="썸네일" />
          <div className="detail-box-contents">
            <h2 className="game-title">{data.title}</h2>
            <div className="game-date">{data.release_date} ・ {data.genre} ・ {data.platform}</div>
            <div className="game-starscore">평균 ★5.0</div>
            <div className="game-suggest">
              <div className="star-rate">
                <div className="rate">평가하기</div>
                <div className="star">
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                </div>
              </div>
              <div className="preference">
                <div className="like">
                  <i className="fa-solid fa-thumbs-up"></i>
                  좋아요
                </div>
                <div className="meh">
                  <i className="fa-regular fa-face-meh"></i>
                  보통이에요
                </div>
                <div className="dislike">
                  <i className="fa-solid fa-thumbs-down"></i>
                  별로예요
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="game-detail-info">
          <h3>기본 정보</h3>

        </div>
      </div>
  );
}

export default Detailinfo;