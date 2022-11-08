import React, { useEffect, useState } from "react";
import './Home.css'
import axios from "axios";

const URL = `https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games`

function Home() {
  const [data, setData] = useState([]);
  let cnt = 0;
  let newgame = [];

  useEffect(() => {
    async function fetchData() {
      await axios.get(URL)
      .then((res) => setData(res.data));
    }
    fetchData();
    console.log(data)
  }, []);
  
  const newgameList = () => {
    console.log(data[0]);
  }

  return (
    <div className="home">
      <div className="newgame-title">신작게임</div>
      <ul className="newgame-list">
        <li>
        </li>
      </ul>
    </div>
  )
}

export default Home