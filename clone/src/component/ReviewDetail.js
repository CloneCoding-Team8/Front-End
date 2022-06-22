import React, { useState } from "react";
import styled from "styled-components";
import estar from "../assets/empty_star.png";
import fstar from "../assets/full_star.png";

const ReviewDetail = () => {
  const [starview, setStarview] = useState(((4.5 * 4) / 4) * 20);
  return (
    <div>
      <h2>리뷰 상세페이지야!</h2>
      <Rstar style={{ background: {} }}>
        <Span
          style={{
            width: `${starview}%`,
          }}
        ></Span>
      </Rstar>
    </div>
  );
};

export default ReviewDetail;

const Rstar = styled.div`
  display: inline-block;
  vertical-align: middle;
  background-size: 250px;
  width: 380px;
  background: url("https://recipe1.ezmember.co.kr/img/mobile/icon_star6.png?v.2")
    1px center no-repeat;
`;

const Span = styled.span`
  background-size: 250px;
  height: 70px;
  display: block;
  background: url("https://recipe1.ezmember.co.kr/img/mobile/icon_star6_on.png?v.2")
    1px center no-repeat;
`;
