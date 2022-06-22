import styled from 'styled-components'

import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { loadUserAxios, logOut, signOutAxios  } from "../../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

function HeadBtntop() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginInfo = useSelector((state) => state.user.userinfo.is_login);
  
  
    const logOutUser = () => {
      dispatch(signOutAxios())
      dispatch(logOut())
    };
  
  
    React.useEffect(() => {
      if (loginInfo === false) {
        dispatch(loadUserAxios());
      }
    });




  return (
    <div style={{marginLeft:'160px'}}>
        
        <TopButton onClick={() => {navigate(`/login`)}} style={{ display: loginInfo ? "none" : "" }}>로그인</TopButton>
        <TopButton onClick={() => {navigate(`/join`)}} style={{ display: loginInfo ? "none" : "" }}>회원가입</TopButton>
        <TopButton onClick={() => {logOutUser()}} style={{ display: !loginInfo ? "none" : "" }}>로그아웃</TopButton>
        <TopButton style={{ display: !loginInfo ? "none" : "" }}>마이페이지</TopButton>
        <TopButton onClick={() => {navigate(`/basket`)}} style={{ display: !loginInfo ? "none" : "" }}>장바구니</TopButton>
        <TopButton>고객센터</TopButton>
    </div>
    )
}

const TopButton = styled.button`
    width: 70px;
    height: 20px;
    background-color: transparent;
    /* border: 1px solid black; */
    border: none;
    outline: none;
    font-size: 12px;
    color: #757575;
    cursor: pointer;
    /* font-weight: bold; */
`;

export default HeadBtntop