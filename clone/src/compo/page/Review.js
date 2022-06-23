import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

// import ReviewDetail from "../component/ReviewDetail";

import { deleteReviewAX, loadReviewAX, getPostOneAX } from "../../redux/modules/review";

const Review = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // 별점구현중
  const [avg, setAvg] = useState((4.344).toFixed(1));

  // const [id_num, setId_num] = useState(5);
  const star_num = [0, 1, 2, 3, 4];
  //   추후에 useselector로 값을 가져와서 보여주기

  // 추후 닉네임 가져오기
  // const is_token = getCookie("Authorization")
  // const nickname = localStorage.getItem("nickname")

  // 리덕스 붙일 때 props값 확인 필요,
  const [productId, setProductId] = useState(0);
  console.log(productId);

  // 리덕스에 저장된 리뷰 정보 가져오기
  // const data = useSelector((state) => state.post.post);
  // console.log(data);

  // 로컬 확인용 정보
  const data = [
    {
      id: "test 2",
      nickname: "test",
      modified: "2022.06.20",
      content: "testcontent",
      star: "4",
    },
  ];

  // const id_num = data[index].star;
  // console.log(data, id_num);

  // const wirte = () => {
  //     if (!is_token) {
  //       window.alert("상품후기는 상품을 구매하시고 배송완료된 회원 분만 한 달 내 작성 가능합니다.")
  //       return;
  //     } else {
  //       Navigate(`/reviewWrite/${productId}`);
  //     }
  //   }
  // const write = () => {
  //   Navigate(`/reviewWrite/${productId} + "index"`);
  // };
  React.useEffect(() => {
    dispatch(loadReviewAX(productId));
  }, []);

  return data.map((list, idx) => {
    return (
      <div className="Review" key={idx}>
        <CommentListWrap>
          <Comment>
            <CommentTitle>{avg}</CommentTitle>
            {star_num.map((item, i) => {
              return (
                <Star key={i} style={{ color: avg < i + 1 ? "#D9D9D6" : "#F2A900" }}>
                  ★
                </Star>
              );
            })}
          </Comment>
          <CommentInfo>
            <li>
              <div style={{width: "4px", height: "4px", margin: "7px 8px 0 0",
                  backgroundColor: "#514859", verticalAlign: "2px"}}></div>
              상품에 대한 리뷰를 남기는 공간입니다.
            </li>
            <li>
              <div
                style={{width: "4px", height: "4px", margin: "7px 8px 0 0",
                  backgroundColor: "#514859", verticalAlign: "2px"}}></div>
              배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 1:1 문의에
              남겨주세요.
            </li>
          </CommentInfo>
          <CommentTable>
            <TableInfo>
              <InfoItem
                style={{
                  width: "400px",
                  textAlign: "left",
                  marginLeft: "5px",
                  fontSize: "23px",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    margin: "5px",
                    fontSize: "20px",
                  }}
                />
                포토후기
              </InfoItem>
              <ReveiwButtonWrap>
                <ReviewButton onClick={() => {Navigate(`/reviewwrite/${list.id}/${productId}`);}}>
                  <img src="//recipe1.ezmember.co.kr/img/mobile/icon_write2.png" alt="" style={{ width: "15px", height: "15px" }}/>
                  후기작성
                </ReviewButton>
              </ReveiwButtonWrap>
            </TableInfo>
          </CommentTable>
          {/* 리뷰카드 */}
          <ReviewTable>
            <InfoName>
              <span style={{width: "100px", fontSize: "18px", paddingTop: "15px",}}>
                {list.nickname}
              </span>
              {/* {nickname === `${list.nickname}` ? ( */}
              <>
                <button className="btn" onClick={() => {Navigate(`/reviewedit/${list.id}/${productId}`);}}>
                  수정
                </button>
                <button className="btn" onClick={() => {dispatch(deleteReviewAX(productId));}}>
                  삭제
                </button>
              </>
              {/* ) : null } */}
            </InfoName>
            {star_num.map((i) => {
              return (
                <LitteStar key={i} style={{color: data[idx].star < i + 1 ? "#D9D9D6" : "#F2A900"}}>
                  ★
                </LitteStar>
              );
            })}
            <Date>{list.modified}</Date>
            <Reviewphoto>
              <img src={list.itemimg} alt="photoreview" />
            </Reviewphoto>
            <InfoItem style={{textAlign: "left", fontSize: "16px", marginLeft: "5px"}}>
              {list.content}
            </InfoItem>
          </ReviewTable>
        </CommentListWrap>
      </div>
    );
  });
};

const CommentListWrap = styled.div`
  margin: 5px auto;
  margin-top: 100px;
  margin-bottom: 80px;
  padding-right: 40px;
  width: 1050px;
`;

const CommentTitle = styled.span`
  margin: 0;
  margin-right: 15px;
  background: #ffb30b;
  border-radius: 8px;
  padding: 15px;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  font-size: 38px;
  font-weight: 600;
  font-family: "Montserrat";
`;
const Comment = styled.div`
  margin: 0 auto;
  padding-bottom: 5px;
  text-align: center;
`;
const Star = styled.div`
  font-size: 38px;
  display: inline-block;
  vertical-align: middle;
`;
// const Star = styled.div`
//   display: inline-block;
// `;
// const PointOfStar = styled.div`
//   background-size: 250px;
//   width: 240px;
//   display: inline-block;
// `;
// const BackgrdoundStar = styled.div`
//   background-size: 250px;
//   width: 240px;
//   display: "block";
// `;

const LitteStar = styled.div`
  font-size: 15px;
  display: inline-block;
`;
const Date = styled.div`
  margin-left: 5px;
  font-size: 15px;
  display: inline-block;
  color: gray;
`;
const CommentInfo = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;
  & > li {
    padding: 0;
    display: flex;
    color: #666666;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const CommentTable = styled.div`
  margin-top: 15px;
  border-top: 1px solid #303735;
  border-bottom: 1px solid #303735;
  font-family: "Noto Sans KR", sans-serif;
`;

const ReviewTable = styled.div`
  margin: 2px;
`;

const TableInfo = styled.div`
  width: 100%;
  height: 65.8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
`;

// const ReviewInfo = styled.div`
//   width: 100%;
//   height: 150px;
//   display: flex;
//   justify-content: flex-start;
// `;

const Reviewphoto = styled.div`
  width: 150px;
  height: 150px;
  margin: 5px;
  display: flex;
  justify-content: flex-start;
`;

const InfoItem = styled.div`
  padding: 25px 0px 23px 0;
  color: #151514;
  line-height: 140%;
  font-weight: 500;
  letter-spacing: 0px;
  vertical-align: middle;
`;
const InfoName = styled.div`
  display: flex;
  align-items: center;
  color: #151514;
  line-height: 140%;
  width: 100%;
  height: 40px;
  text-align: left;
  margin: 10px 5px;
  padding: 5px;
  .btn {
    background-color: white;
    border-radius: 10px;
    margin: 5px;
    padding: 0 20px;
    height: 30px;
    width: 80px;
    cursor: pointer;
    border: 1px solid gray;
    font-size: 16px;
  }
`;

const ReveiwButtonWrap = styled.div`
  padding: 10px 0px;
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ReviewButton = styled.button`
  padding: 0;
  width: 128px;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  font-family: "Noto Sans KR", sans-serif;
  color: black;
  border: 1px solid #042b0a;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: content-box;
  &:hover {
    background-color: #74b243;
    color: white;
  }
`;

export default Review;