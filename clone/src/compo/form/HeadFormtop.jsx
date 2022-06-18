import '../../App.css';
import styled from 'styled-components'
import Headbtntop from "../elemen/Headbtntop"


function HeadFormbot() {
  return (
    // <HeadDiv>
        <HeadBack>
            <HeadTitle>
                <span>천개스토어</span>
            </HeadTitle>
                <Headbtntop/>
        </HeadBack>
    // </HeadDiv>
    )
}

const HeadTitle = styled.div`
    font-family: 'Do Hyeon';
    font-size: 36px;
    margin-right: 50px;
`

const HeadBack = styled.div`
    /* border:1px solid black; */
    width: 100%;
    height: 60px;
    background-color:transparent;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`

export default HeadFormbot