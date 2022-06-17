import '../../App.css';
import styled from 'styled-components'
import Headbtn from "../elemen/Headbtn"

function HeadFormbot() {
  return (
    <>
        <HeadBack>
            <Headbtn/>
            <Headbtn/>
            <Headbtn/>
            <Headbtn/>
            <Headbtn/>
            <Headbtn/>
        </HeadBack>
    </>
    )
}

const HeadBack = styled.div`
    /* border:1px solid black; */
    width: auto;
    height: 60px;
    background-color:transparent;
`;

export default HeadFormbot