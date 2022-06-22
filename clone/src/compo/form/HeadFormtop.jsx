import '../../App.css';
import styled from 'styled-components'
import Headbtntop from "../elemen/Headbtntop"
import { Routes, Route, useNavigate } from "react-router-dom";



function HeadFormbot() {

    const navigate = useNavigate();

  return (
    // <HeadDiv>
        <HeadBack>
            <HeadTitle>
                <span onClick={() => {navigate(`/`)}}>천개스토어</span>
            </HeadTitle>
            <WhiteSpace></WhiteSpace>
                <Headbtntop/>
        </HeadBack>
    // </HeadDiv>
    )
}

const HeadTitle = styled.div`
    font-family: 'Do Hyeon';
    font-size: 36px;
    cursor: pointer;
    /* border: 1px solid black; */
`

const WhiteSpace = styled.div`
    /* border: 1px solid black; */
    width: 550px;
    height: 20px;
`

const HeadBack = styled.div`
    /* border:1px solid black; */
    width: 1200px;
    height: 60px;
    background-color:transparent;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

export default HeadFormbot