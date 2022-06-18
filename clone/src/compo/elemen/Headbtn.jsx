import '../../App.css';
import styled from 'styled-components'

function Headbtn() {
  return (
    <>
        <HeadBotton>스토어홈<BarAni/></HeadBotton>
        <HeadBotton>베스트<BarAni/></HeadBotton>
        <HeadBotton>특가<BarAni/></HeadBotton>
        <HeadBotton>신상<BarAni/></HeadBotton>
        <HeadBotton>기획전<BarAni/></HeadBotton>
        <HeadBotton>브랜드<BarAni/></HeadBotton>
    </>
    )
}


const HeadBotton = styled.button`
    width: 100px;
    height: 45px;
    padding-top: 15px;
    /* border: 1px solid black; */
    outline: none;
    border: none;
    font-size: 18px;
    /* font-weight: bold; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
`;

const BarAni = styled.div`
    /* border: 1px solid black;  */
    width: 75px; 
    height: 2px;
    background-color: #66BB6A;
    ${HeadBotton}:hover & {
    display: block;}
    display: none;
`
export default Headbtn