import '../../App.css';
import styled from 'styled-components'
import List from "../../image/list.svg"


function HeadbtnLong() {
  return (
    <>
        <HeadBottonLong><img src={List}></img>전체카테고리</HeadBottonLong>
    </>
    )
}


const HeadBottonLong = styled.button`
    width: 140px;
    margin-right: 60px; 
    height: 40px;
    /* border: 1px solid black; */
    border: none;
    outline: none;
    font-size: 18px;
    /* font-weight: bold; */
    background-color: transparent;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export default HeadbtnLong