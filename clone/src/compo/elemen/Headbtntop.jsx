import '../../App.css';
import styled from 'styled-components'

function HeadBtntop() {

  return (
    <div style={{marginLeft:'160px'}}>
        <TopButton>로그인</TopButton>
        <TopButton>회원가입</TopButton>
        <TopButton>마이페이지</TopButton>
        <TopButton>장바구니</TopButton>
        <TopButton>고객센터</TopButton>
    </div>
    )
}

const TopButton = styled.button`
    width: 70px;
    height: 20px;
    background-color: transparent;
    /* border: 1px solid black; */
    border: none;
    outline: none;
    font-size: 12px;
    color: #757575;
    /* font-weight: bold; */
`;

export default HeadBtntop