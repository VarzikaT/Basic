import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card';
import "./Dashboard.css"

const Dashboard = () => {

  const [data, setData] = useState(1000);

  console.log(data);

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


 useEffect(() => {
    axios.request(options).then(function (response) {
      // console.log(response.data);
      setData(response.data.value[0])
    }).catch(function (error) {
      console.error(error);
    });  
 }, [])
 

    return (
        <div className='dash-container'>

        <div className='card-container'>  
    <Card/>
    <Card/>
    <Card/>
    <Card/>
        </div>
    <div>

      {data.description}
      Trending 
    </div>
        </div>
  )
};

export default Dashboard


