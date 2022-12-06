import React from "react";
import {useParams} from "react-router-dom";

function Detailinfo() {
  const {dataId} = useParams();
  return (
      <>
        {dataId}
      </>
  );
}

export default Detailinfo;