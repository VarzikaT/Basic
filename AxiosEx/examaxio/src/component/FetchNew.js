import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

function FetchNew() {

    const fetchNews=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1f6e735a036e4758abc19d2131bd59f3")
        .then((response)=>{
            console.log(response);
        })
    }
  return (
    <>
        <div className="container my-3">
            <div className="row">
                <div className="col-4">
                <button className="btn btn-primary" onClick={fetchNews}>FetchNew</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default FetchNew