import styled from 'styled-components'


function Join() {
    return(
        <JoinWrap>
            <JoinTitle>
             회원 가입
            </JoinTitle>
            <JoinInputWrap>
                <JoinInLeft>
                    <LabelJoin>아이디</LabelJoin>
                    <LabelJoin>닉네임</LabelJoin>
                    <LabelJoin>패스워드</LabelJoin>
                    <LabelJoin>패스워드 확인</LabelJoin>
                </JoinInLeft>
                <JoinInright>
                    <Input></Input>
                    <Input></Input>
                    <Input></Input>
                    <Input></Input>
                </JoinInright>
            </JoinInputWrap>
            <JoinBtn>회원 가입</JoinBtn>
        </JoinWrap>
        )
}

const JoinWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 120px;
`

const JoinTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #81C784;
`

const JoinInputWrap = styled.div`
    width: 700px;
    height: 300px;
    display: flex;
    margin-top: 30px;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`

const JoinInLeft = styled.div`
    /* border: 1px solid black; */
    width: 250px;
    height: 250px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-end;
`

const JoinInright = styled.div`
    /* border: 1px solid black; */
    width: 400px;
    height: 250px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`

const Input = styled.input`
    padding: 10px;
    width: 300px;
    height: 10px;
    outline: none;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid #81C784;
`

const LabelJoin = styled.span`
    font-size: 20px;
    height: 35px;
    font-weight: bold;
    /* border: 1px solid black; */
    margin-bottom: 20px;
    /* text-align: right; */
    width: 110px;
`

const JoinBtn = styled.button`
    width: 200px;
    height: 50px;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
    background-color: #81C784;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
`


export default Join