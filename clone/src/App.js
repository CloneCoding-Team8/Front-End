import React, { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { loadUserAxios, logOut } from "./redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import HeadFormbot from "./compo/form/HeadFormbot";
import HeadFormtop from "./compo/form/HeadFormtop";
import FooterForm from "./compo/form/FooterForm";
import ProductDetail from "./compo/page/ProductDetail";
import { setCookie, getCookie } from "universal-cookie";

import Main from "./compo/page/Main";
import Login from "./compo/page/Login";
import Join from "./compo/page/Join";
import Basket from "./compo/page/ShoppingBasket";

// import Test from "./compo/page/Test"
// 리뷰관련
import ReviewEdit from "./page/ReviewEdit";
import ReviewWrite from "./page/Reviewwrite";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const cookies = new Cookies();

  console.log(document.cookie);
  // console.log(getCookie('refreshtoken'))

  return (
    <div className="App">
      <HeadFormAlign>
        <HeadFormtop />
        <HeadFormbot />
      </HeadFormAlign>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        {/* 리뷰관련 */}
        {/* <Route path="/productdetail/:productId" element={<ProductDetail />} /> */}
        <Route
          path="/reviewwrite/:index/:productId"
          element={<ReviewWrite />}
        />
        <Route path="/reviewedit/:index/:productId" element={<ReviewEdit />} />
      </Routes>
      <div>
        {/* <Test/> */}
        <FooterForm />
      </div>
    </div>
  );
}

const HeadFormAlign = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default App;
