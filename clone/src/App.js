import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import styled from 'styled-components'

import HeadFormbot from "./compo/form/HeadFormbot"
import HeadFormtop from "./compo/form/HeadFormtop"
import FooterForm from "./compo/form/FooterForm"
import ProductDetail from "./compo/page/ProductDetail"


import Main from "./compo/page/Main"
import Login from "./compo/page/Login"
import Join from "./compo/page/Join"



function App() {
  const navigate = useNavigate();


  return (
    <div className="App">
      <div>
        <HeadFormtop/>
        <HeadFormbot/>
      </div>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
      </Routes>
      <div>
        <ProductDetail/>
        <FooterForm />
      </div>
    </div>
  );
}




export default App;
