import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import file from "../../image/file_upload.png";

// 리덕스 관련
import { modifyReviewAX, getPostOneAX } from "../../redux/modules/review";

const ReviewEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 수정 구현 중
  const productid = useParams().productId;
  const Index = useParams().index;
  console.log(productid, Index);

  // const is_edit = productid ? true : false;
  // const post_list = useSelector((state) => state.post.postOne);
  // const userId = localStorage.getItem("userId");
  // 로컬확인용
  const post_list = {
    postOne: {
      itemimg:
        "https://www.google.com/imgres?imgurl=http%3A%2F%2Fm.62life.com%2Fimages%2Fgdimg%2F46021004_main1.jpg&imgrefurl=http%3A%2F%2Fwww.62life.com%2Fm%2Fgoods%2Fitem_detail_m.asp%3Fodtype%3D11%26odtype2%3D01%26gdtype%3D70%26gdcd%3D46021004%26divcd%3D30&tbnid=UoTibdwJVew4DM&vet=12ahUKEwjn35LY6734AhXYzosBHYJpAQwQMyg9egQIARBy..i&docid=YlPKJyDzGFOR1M&w=500&h=600&q=%EC%83%81%ED%92%88%20%EC%82%AC%EC%A7%84&ved=2ahUKEwjn35LY6734AhXYzosBHYJpAQwQMyg9egQIARBy",
      content: "review content test",
      star: "3",
    },
  };
  const [content, setContent] = useState(post_list.postOne.content);
  const [attachment, setAttachment] = useState(post_list.postOne.itemimg);
  // 셀렉박스 값
  const [star, setStar] = useState(post_list.postOne.star);
  // const [content, setContent] = useState(post_list[Index].content);
  // const [attachment, setAttachment] = useState(post_list[Index].itemimg);
  // // 셀렉박스 값
  // const [star, setStar] = useState(post_list[Index].star);
  // 이미지 관련
  const fileInput = React.useRef();
  const [preview, setPreview] = useState("");
  // 파일 선택
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);

    reader.onload = function (finishiedEvent) {
      setPreview(e.target.result);
      const {
        currentTarget: { result },
      } = finishiedEvent;
      setAttachment(result);
    };
  };

  // 수정 구현
  const Modify = () => {
    // const userId = getCookie("userId");
    if (star === "" || content === "" || file === "") {
      window.alert("내용 작성 및 벌점선택, 사진 첨부를 다시 확인해주세요.");
      return;
    } else {
      const file = fileInput.current.files[0];
      const formData = new FormData();

      formData.append("itemimg", file);
      formData.append("star", star);
      formData.append("content", content);

      dispatch(modifyReviewAX(productid, formData));
      window.alert("후기가 작성되었습니다!");
      navigate(-1);
    }
  };

  return (
    <React.Fragment>
      <WriteContainer>
        <ReviewTitle>후기 수정</ReviewTitle>

        <WriteWrap>
          <TitleWrap>
            <StarTitle>
              <span
                style={{
                  marginRight: "10px",
                }}
              >
                별점 선택
              </span>
              {/* 드롭박스 */}
              <select
                style={{
                  margin: "5px",
                }}
                defaltvalue={star}
                onChange={(e) => {
                  setStar(e.target.value);
                }}
              >
                <option value="">별점</option>
                <option value="1">✭</option>
                <option value="2">✭✭</option>
                <option value="3">✭✭✭</option>
                <option value="4">✭✭✭✭</option>
                <option value="5">✭✭✭✭✭</option>
              </select>
            </StarTitle>
          </TitleWrap>
          <CommentTextWrap>
            <CommentTextTitle style={{ height: "272px" }}>
              후기작성
            </CommentTextTitle>
            <CommentTitleBorder2>
              <CommentTextInput
                defaultValue={content}
                multiple="multiple"
                onChange={(e) => {
                  setContent(e.target.value);
                  // console.log(content);
                }}
                placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
      일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다. 
      반품/환불 문의는 1:1문의로 가능합니다."
              />
            </CommentTitleBorder2>
            <CommentTitleBorder3 />
          </CommentTextWrap>

          <CommentPhotoWrap>
            <CommentPhotoTitle style={{ height: "150px" }}>
              사진등록
            </CommentPhotoTitle>
            <PotoDivWrap>
              <PotoDiv>
                <PhotoUpload>
                  <label>
                    <img
                      src={attachment ? attachment : null}
                      alt=""
                      style={{
                        width: "80px",
                        marginTop: "5px",
                        color: "#e2e2e2",
                      }}
                    />
                    <input
                      type="file"
                      onChange={selectFile}
                      accept="img/*"
                      ref={fileInput}
                      multiple="multiple"
                    />
                  </label>
                </PhotoUpload>
                <PhotoUpload>
                  <label>
                    <img
                      src={file}
                      alt=""
                      style={{
                        width: "20px",
                        marginTop: "33px",
                        color: "#e2e2e2",
                      }}
                    />
                    <input
                      type="file"
                      onChange={selectFile}
                      accept="img/*"
                      ref={fileInput}
                    />
                  </label>
                </PhotoUpload>
                <PhotoUpload1>
                  <img
                    style={{ width: "80px", marginTop: "5px" }}
                    src={preview ? preview : null}
                    alt=""
                  />
                </PhotoUpload1>
              </PotoDiv>
              <PhotoDesc>
                구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제 및
                적립 헤택이 취소됩니다.
                <CommentTitleBorder4 />
              </PhotoDesc>
            </PotoDivWrap>
          </CommentPhotoWrap>
        </WriteWrap>
        <Button
          type="button"
          onClick={Modify}
          color="white"
          size="16.5px"
          margin="1px 0 0 0"
        >
          수정하기
        </Button>
      </WriteContainer>
    </React.Fragment>
  );
};

const ReviewTitle = styled.div`
  height: 36px;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.5px;
  display: flex;
  margin-left: 28px;
  font-family: "Noto Sans KR", sans-serif;
`;
const StarTitle = styled.div`
  height: 36px;
  font-weight: 500;
  font-size: 15px;
  line-height: 36px;
  letter-spacing: -1px;
  display: flex;
  margin-left: 30px;
  font-family: "Noto Sans KR", sans-serif;
`;

const TitleWrap = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  align-content: center;
  font-family: "Noto Sans KR", sans-serif;
`;

const WriteWrap = styled.div`
  width: 820px;
  font-family: "Noto Sans KR", sans-serif;
`;
const CommentTitleBorder2 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 660px;
  display: flex;
  margin-top: 130px;
`;

const CommentTitleBorder3 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 670px;
  display: flex;
  margin-top: 331px;
  margin-left: -670px;
`;

const CommentTextWrap = styled.div`
  /* display: flex;
height: 272px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -133px;
`;

const CommentTextTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 39px;
  padding: 0 20 222px;
  width: 153px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  text-overflow: hidden;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
`;

const CommentTextInput = styled.textarea`
  display: flex;
  width: 100%;
  height: 234px;
  padding: 0 10px;
  border: 1px solid #dddfe1;
  font-size: 12px;
  color: #000;
  line-height: 18px;
  outline: none;
  margin-top: 7px;
  margin-bottom: 100px;
  font-family: "Noto Sans KR", sans-serif;
  resize: none;
`;

const CommentPhotoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -133px;
  border-bottom: 1px solid #dddfe1;
`;

const PotoDivWrap = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  // 핑크
`;

const CommentPhotoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 41px;
  padding: 0 20 222px;
  // 수정
  width: 151px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  border-bottom: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  text-overflow: hidden;
  text-align: center;
`;

const PhotoDesc = styled.div`
  /* background-color: yellow; */
  display: flex;
  height: 20px;
  padding: 0 10px;
  font-size: 12px;
  text-align: center;
  word-break: inherit;
  font-family: "Noto Sans KR", sans-serif;
  color: #666;
  line-height: 18px;
  outline: none;
  /* margin-top: 140px; */
  margin-bottom: -60px;
  margin-left: 9px;
`;

const PotoDiv = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  margin: -42px 0px 0px 10px;
`;
const PhotoUpload1 = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80px;
  height: 80px;
  margin: 10px 0;
  border: none;
  margin: 10px;
  margin-top: 40px;
  padding-bottom: 10px;
  display: block;
`;

const PhotoUpload = styled.div`
  /* background-color: yellow; */
  text-align: center;
  width: 80px;
  height: 80px;
  margin: 10px 0;
  border: 1px solid #dddfe1;
  margin: 10px;
  margin-top: 40px;
  padding-bottom: 10px;
  display: block;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const CommentTitleBorder4 = styled.div`
  border-top: 1px solid #dddfe1;
  width: 677px;
  display: flex;
  justify-content: center;
  margin-top: 25.5px;
  margin-left: -600px;
`;
// padding: 10px 0px 10px 10px;

const Button = styled.button`
margin: 40px auto;
width: 20%;
height: 54px;
border-radius: 3px;
border: 1px solid: #74b243;
background-color: #74b243;
cursor: pointer;
display: block;
justify-content: center;
overflow: hidden;
text-align: center;
font-family: "Noto Sans KR", sans-serif;
`;

const WriteContainer = styled.div`
  width: 820px;
  margin: 0 auto;
  padding: 0px 0px 60px 0px;
`;

export default ReviewEdit;