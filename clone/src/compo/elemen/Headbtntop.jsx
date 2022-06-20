import styled from 'styled-components'

import { Routes, Route, useNavigate } from "react-router-dom";

function HeadBtntop() {

    const navigate = useNavigate();


  return (
    <div style={{marginLeft:'160px'}}>
        <TopButton onClick={() => {navigate(`/login`)}}>로그인</TopButton>
        <TopButton onClick={() => {navigate(`/join`)}}>회원가입</TopButton>
        <TopButton>마이페이지</TopButton>
        <TopButton onClick={() => {navigate(`/basket`)}}>장바구니</TopButton>
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