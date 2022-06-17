import '../../App.css';
import styled from 'styled-components'

function Headbtntop() {
  return (
    <>
        <Topbutton>베스트</Topbutton>
    </>
    )
}

const Topbutton = styled.button`
    width: 50px;
    height: 20px;
    background-color: transparent;
    /* border: none; */
    outline: none;
    font-size: 10px;
    color: #757575
    /* font-weight: bold; */
`;

export default Headbtntop