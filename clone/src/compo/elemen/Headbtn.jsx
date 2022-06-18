import '../../App.css';
import styled from 'styled-components'

function Headbtn() {
  return (
    <>
        <HeadBotton>스토어홈</HeadBotton>
        <HeadBotton>베스트</HeadBotton>
        <HeadBotton>특가</HeadBotton>
        <HeadBotton>신상</HeadBotton>
        <HeadBotton>기획전</HeadBotton>
        <HeadBotton>브랜드</HeadBotton>
    </>
    )
}


const HeadBotton = styled.button`
    width: 100px;
    height: 40px;
    padding: 10px;
    /* border: 1px solid black; */
    outline: none;
    border: none;
    font-size: 18px;
    /* font-weight: bold; */
    background-color: transparent;
    cursor: pointer;
`;

export default Headbtn