import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function FetchNew() {
  const [news, setNews] = useState([]);
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=1f6e735a036e4758abc19d2131bd59f3"
      )
      .then((response) => {
        console.log("response");
        setNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              FetchNew
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={value.urlToImage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">
                      {value.description}
                    </p>
                    <a href="#" className="btn btn-primary">
                    Main
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchNew;
