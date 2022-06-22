import '../../App.css';
import styled from 'styled-components'
import List from "../../image/list.svg"


function HeadbtnLong() {
  return (
    <>
        <HeadBottonLong>
            <img src={List}/>
            전체카테고리
            <ListPop>
                <InListPop><span>전체보기</span></InListPop>
                <InListPop><span>신선식품</span></InListPop>
                <InListPop><span>간편식</span></InListPop>
                <InListPop><span>가공식품</span></InListPop>
                <InListPop><span>주방용품</span></InListPop>
                <InListPop><span>주방가전</span></InListPop>
                <InListPop><span>생활용품</span></InListPop>
            </ListPop>
        </HeadBottonLong>
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
    /* font-weight: bold; */
    background-color: transparent;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    cursor: pointer; 
    
`

const ListPop = styled.ul`
    display: none;
    ${HeadBottonLong}:hover & {
    display: block;}
    /* border: 1px solid black; */
    background-color: white;
    margin: auto;
    z-index: 5;
`

const InListPop = styled.div`
    width: 80px;
    /* border: 1px solid black; */
    font-size: 17px;
    margin: 35px;
    text-align: left;
`

export default HeadbtnLong