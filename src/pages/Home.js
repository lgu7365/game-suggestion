import React, { useEffect, useState } from "react";
import Slider from "../component/Slider";

function Home() {
  return (
    <div className="home">
      <Slider name="인기게임" tag="?sort-by=popularity"/>
      <Slider name="신작게임" tag="?sort-by=release-date"/>
      <div className="genre-title">장르별게임</div>
      <Slider name="MMORPG" tag="?category=mmorpg"/>
      <Slider name="Shooter" tag="?category=shooter"/>
      <Slider name="MOBA" tag="?category=moba"/>
      <Slider name="Anime" tag="?category=anime"/>
      <Slider name="Battle Royale" tag="?category=battle-royale"/>
    </div>
  )
}

export default Home