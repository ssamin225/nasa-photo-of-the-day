import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";
import Header from "./components/header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styled from "styled-components";

const StyledApp = styled.div`
  background-color: #dac292;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2%;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .container {
    width: 75%;
    background-color: #e3dcc1;
    text-align: center;
    margin: auto;
  }

  .bold-text {
    font-weight: bold;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    .container {
      width: 100%
    }
  }
`

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
      <StyledApp>
        <div className="container">
          <Header setDate={setDate}/>
          <Content data={data}/>
          <Footer copyright={data.copyright}/>
        </div>
      </StyledApp>
  );
}

export default App;
