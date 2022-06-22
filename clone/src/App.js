import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// 페이지 라우팅
import ReviewWrite from "./page/Reviewwrite";
// 추후 리뷰는 컴포넌트로 이동, 라우팅도 제외하고, 상세페이지 하단에 컴포넌트 넣기
import Review from "./page/Review";
import ReviewEdit from "./page/ReviewEdit";

function App() {
  // 상품 아이템별 고유번호-> 추후 BE 통신하여 useSelector로 가져오기
  // const [productId, setProductId] = useState("1");

  return (
    <div className="App">
      <Routes>
        <Route path="/review" element={<Review />} />
        {/* <Route
          path="/reviewDetail/:productId"
          element={<ReviewDetail/>}
        /> */}
        <Route
          path="/reviewwrite/:index/:productId"
          element={<ReviewWrite />}
        />
        <Route path="/reviewedit/:index/:productId" element={<ReviewEdit />} />
      </Routes>
    </div>
  );
}

export default App;
