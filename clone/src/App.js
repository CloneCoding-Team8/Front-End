import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { loadUserAxios, logOut , signOutAxios } from "./redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

import styled from 'styled-components'

import HeadFormbot from "./compo/form/HeadFormbot"
import HeadFormtop from "./compo/form/HeadFormtop"
import FooterForm from "./compo/form/FooterForm"
import ProductDetail from "./compo/page/ProductDetail"


import Main from "./compo/page/Main"
import Login from "./compo/page/Login"
import Join from "./compo/page/Join"
import Basket from "./compo/page/ShoppingBasket"
import Reviewwrite from "./compo/page/ReviewWrite"
import ReviewEdit from "./compo/page/ReviewEdit"


// import Test from "./compo/page/Test"
// import {getCookie} from "./shared/Cookie"
// import {setCookie} from "./shared/Cookie"




function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.user.userinfo.is_login);

  // const cookies = new Cookies();
  // console.log(localStorage.getItem("accesstoken") )
  // console.log(document.cookie)

  // console.log(getCookie('refreshtoken'))

  return (
    <div className="App">
      <HeadFormAlign>
        <HeadFormtop/>
        <HeadFormbot/>
      </HeadFormAlign>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/productdetail/:id" element={<ProductDetail />}/>
            <Route path="/reviewwrite/:id/:productId" element={<Reviewwrite />}></Route>
            <Route path="/reviewedit/:id/:productId" element={<ReviewEdit />}></Route>
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
`


export default App;
