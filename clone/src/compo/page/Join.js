import styled from 'styled-components'
import React from 'react'

import { signupAxios } from "../../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


function Join() {
    const usernameRef = React.useRef(null);
    const nicknameRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const confirmPasswordRef = React.useRef(null);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const signupFunction = async () => {
        if (
          usernameRef.current.value === "" ||
          nicknameRef.current.value === "" ||
          passwordRef.current.value === "" ||
          confirmPasswordRef.current.value === "" ||
          usernameRef.current.value === " " ||
          nicknameRef.current.value === " " ||
          passwordRef.current.value === " " ||
          confirmPasswordRef.current.value === " " ||
          usernameRef.current.value === null ||
          nicknameRef.current.value === null ||
          passwordRef.current.value === null ||
          confirmPasswordRef.current.value === null
        ) {
          alert("아이디, 닉네임, 비밀번호를 채워주세요!");
          return false;
        }
        document.getElementById("SigninBtn").disabled = true;
        try {
          await dispatch(
            signupAxios(
              usernameRef.current.value,
              nicknameRef.current.value,
              passwordRef.current.value,
              confirmPasswordRef.current.value
            )
          ).then((res) => {
            if (res === true) {
              console.log(res);
              navigate("/login");
              alert("회원가입되었습니다!");
            } else {
              if (res.response.data.message === "the username already exists.") {
                alert("이미 가입된 ID입니다!");
                document.getElementById("SigninBtn").disabled = false;
              } else if (
                res.response.data.message === "the nickname already exists."
              ) {
                alert("이미 가입된 닉네임입니다!");
                document.getElementById("SigninBtn").disabled = false;
              } else if (res.response.data.errors[0] === undefined) {
                alert("입력한 내용을 다시 확인해주세요!");
                document.getElementById("SigninBtn").disabled = false;
              } else {
                alert(
                  res.response.data.errors[0].field +
                    "에 " +
                    res.response.data.errors[0].reason
                );
                document.getElementById("SigninBtn").disabled = false;
              }
            }
          });
        } catch (err) {
          alert("에러입니다!" + err);
        }
      };



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
                    <Input ref={usernameRef}></Input>
                    <Input ref={nicknameRef}></Input>
                    <Input ref={passwordRef}></Input>
                    <Input ref={confirmPasswordRef}></Input>
                </JoinInright>
            </JoinInputWrap>
            <JoinBtn onClick={signupFunction} id="SigninBtn">회원 가입</JoinBtn>
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