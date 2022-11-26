import React, { useEffect, useState } from "react";
import Slider from "../component/Slider";
import axios from "axios";

const URL = `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games`

function Home() {
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
    <div className="home">
      <Slider name="인기게임" data={data.slice(0, 10)}/>
      <Slider name="신작게임" data={data.slice(0, 10)}/>
      <Slider name="shooter" data={data.slice(0, 10)}/>
    </div>
  )
}

export default Home