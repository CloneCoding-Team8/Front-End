import '../../App.css';
import styled from 'styled-components'

function Headbtn() {
  return (
    <>
        <HeadBotton>베스트</HeadBotton>
    </>
    )
}

const HeadBotton = styled.button`
    width: 80px;
    height: 40px;
    background-color: transparent;
    /* border: none; */
    outline: none;
    font-size: 14px;
    font-weight: bold;
`;

export default Headbtn