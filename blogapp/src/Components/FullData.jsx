import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { store } from "./Data";

const Fulldata = () => {
  const [data] = useContext(store);
  const { id } = useParams;

  return (
    <div>
      {data
        .filter((data) => data.id === id)
        .map((data) => (
          <div className="leftData">
            <div key={data.id}>
              <img src={data.image} alt="" className="imageUrl1" />
              <div>
                <h3 className="title1">{data.Title}</h3>
              </div>
              <div>
                <p className="para1">{data.Description}</p>
              </div>
              <div>
                <p className="date1">{data.Date}</p>
              </div>
              <div>
                <p className="cat1">{data.Category}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Fulldata;
