import '../../App.css';
import styled from 'styled-components'
import Headbtntop from "../elemen/Headbtntop"

function HeadFormbot() {
  return (
    <>
        <HeadBack>
            <Headbtntop/>
            <Headbtntop/>
            <Headbtntop/>
            <Headbtntop/>
            <Headbtntop/>
        </HeadBack>
    </>
    )
}

const HeadBack = styled.div`
    border:1px solid black;
    width: auto;
    height: 60px;
    background-color:transparent;
`;

export default HeadFormbot