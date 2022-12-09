import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

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
  if (loading) return <Loading />;
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
          <div className="detail-info-content">
            <div className="basic-info">
              <h5>기본 정보</h5>
              <div className="d-game-title">Title: {data.title}</div>
              <div className="d-game-date">{data.release_date}</div>
              <div className="d-game-developer">{data.genre}・{data.platform}</div>
              <div className="d-game-description">{data.description}</div>
            </div>
            <div className="play-image-content">
              <h5>플레이 이미지</h5>
              <ul className="play-image-list">
                {data.screenshots ? data.screenshots.map(data => (
                  <li key={data.id}>
                    <img src={data.image} alt="게임 플레이 이미지" />
                  </li>
                )) : '없음'}
              </ul>
            </div>
          </div>
          <div className="additional-info">
            <div className="additional-info-contents">
              <h5>추가 정보</h5>
              <div className="add-info-container">
                <div className="add-title">
                  <span>Title</span>
                  <p>{data.title}</p>
                </div>
                <div className="add-developer">
                  <span>Developer</span>
                  <p>{data.developer}</p>
                </div>
                <div className="add-publisher">
                  <span>Publisher</span>
                  <p>{data.publisher}</p>
                </div>
                <div className="add-date">
                  <span>Release Date</span>
                  <p>{data.release_date}</p>
                </div>
                <div className="add-genre">
                  <span>Genre</span>
                  <p>{data.genre}</p>
                </div>
                <div className="add-platform">
                  <span>Platform</span>
                  <p>{data.platform}</p>
                </div>
              </div>
            </div>
            <div className="require-info">
              <h5>최소 시스템 사양</h5>
              {data.minimum_system_requirements ? 
              <div className="require-info-container">
                <div className="require-os">
                  <span>OS</span>
                  <p>{data.minimum_system_requirements.os}</p>
                </div>
                <div className="require-processor">
                  <span>Processor</span>
                  <p>{data.minimum_system_requirements.processor}</p>
                </div>
                <div className="require-memory">
                  <span>Memory</span>
                  <p>{data.minimum_system_requirements.memory}</p>
                </div>
                <div className="require-graphics">
                  <span>Graphics</span>
                  <p>{data.minimum_system_requirements.graphics}</p>
                </div>
                <div className="require-storage">
                  <span>Storage</span>
                  <p>{data.minimum_system_requirements.storage}</p>
                </div>
              </div> : '없음'}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Detailinfo;