import React from 'react'
import axios from "axios";




const Dashboard = () => {

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {safeSearch: 'Off', textFormat: 'Raw'},
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'd22eaa3c94msh7bf6560809ff00cp1526b6jsn6783f1e518dd'
  }
};


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

    return (
    <div>  </div>
  )
};

export default Dashboard


