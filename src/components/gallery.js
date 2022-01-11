import React, { useEffect, useState } from "react";
import "../components/gallery.css";

const Gallery = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="title">
        <h1>WALL - GALLERY</h1>
      </div>

      {data.length > 0 && (
        <div className="imageBox">
          {data.map((data) => (
            <a href={data.urls.raw} target="blank">
              <img
                className="img"
                src={data.urls.full}
                alt="hello"
                onClick={data.urls.full}
              ></img>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
