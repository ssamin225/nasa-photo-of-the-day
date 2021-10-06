import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer"

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setData(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Content data={data}/>
      <Footer />
    </div>
  );
}

export default App;
