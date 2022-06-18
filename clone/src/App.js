import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import './App.css';
import styled from 'styled-components'

import HeadFormbot from "./compo/form/HeadFormbot"
import HeadFormtop from "./compo/form/HeadFormtop"
import AddForm from "./compo/form/AddForm"
import Body from "./compo/page/Body"


function App() {
  return (
    <div className="App">
      <HeadFormtop/>
      <HeadFormbot/>
      <AddForm/>
      <SpeacialSale><span>NOW 특가상품</span></SpeacialSale>
      <Body></Body>
    </div>
  );
}


const SpeacialSale = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 80px;
  margin-bottom: 60px;
`

export default App;
