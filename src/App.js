import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer"

function App() {

  const [data, setData] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}${!date ? '' : `&date=${date}`}`)
      .then(res => {
        setData(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, [date])

  return (
    data.length === 0
      ? <h2>Loading...</h2>
      :
      <div className="App">
        <Header setDate={setDate}/>
        <Content data={data}/>
        <Footer copyright={data.copyright}/>
      </div>
  );
}

export default App;
