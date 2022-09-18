import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { store } from "./Data";
import './Style.css'

const Fulldata = () => {
  const [data] = useContext(store);
  const {id} = useParams();

  return (
    <div>
      {
        <div className="leftData">
          <hr className="horizontal"></hr>
          <div key = {data[id-1].id}>
            <img src = {data[id-1].image} alt = '' className='imageUrlNext' />
            <div><h3 className='titleNext'>{data[id-1].Title}</h3></div>
            <div><p className='paraNext'>{data[id-1].Description}</p></div>
            <div><p className='dateNext'>{data[id-1].Date}</p></div>
            <div><p className="timingNext">{data[id-1].Time}</p></div>
            <div><p className='catNext'>{data[id-1].Category}</p></div>
          </div>
        </div>
      }
    </div>
  );
};

export default Fulldata;
