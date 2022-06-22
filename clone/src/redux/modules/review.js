import { apis } from "../../shared/api";

// 리뷰 CRUD
// Actions
const REVIEWLOAD = "review/LOAD";
const REVIEWDELETE = "review/DELETE";
const ADD_REVIEW = "review/ADD";
const MODIFY_REVIEW = "review/MODIFY";

const GET_POST_ONE = "GET_POST_ONE";


// 초기 상태값
const initialState = {
  post: [],
  postOne: {
    id: "",
    nickname: "",
    modified: "",
    itemimg: "",
    content: "",
    star: "",
  },
  list: [
    {
      itemimg: "",
      content: "",
      star: "",
    },
  ],
};

// Action Creators
export function loadReview(review_list) {
  return { type: REVIEWLOAD, review_list };
}

export function deleteReview(review_id) {
  return { type: REVIEWDELETE, review_id };
}

export const addReview = (list) => {
  return { type: ADD_REVIEW, list };
};

export const modifyReview = (review, review_id) => {
  return { type: MODIFY_REVIEW, review, review_id };
};

export const getPostOne = (review_one_list) => {
  return { type: GET_POST_ONE, review_one_list };
};


// Middlewares
export const addReviewAX = (productid, formData) => {
  console.log(productid, formData);
  return async (dispatch, getState) => {
    await apis
      .adds(productid, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        // dispatch(addReview(formData));
      })
      .catch((error) => {
        console.log(error);
        const err_message = error.response.data.errorMessage;
        window.alert(err_message);
      });
  };
};



export const deleteReviewAX = (review_id) => {
  return async function (dispatch, getState) {
    await apis
      .del(review_id)
      .then((response) => {
        console.log(response);
        window.alert("후기가 삭제되었습니다.");
        dispatch(deleteReview(review_id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const loadReviewAX = (productId) => {
  console.log(productId);
  return async (dispatch) => {
    await apis
      .load(productId)
      .then((response) => {
        console.log(response);
        const review_list = response.data;
        console.log(review_list);
        dispatch(loadReview(review_list));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const modifyReviewAX = (reviewid, formData) => {
  console.log(reviewid);
  return async (dispatch) => {
    await apis
      .edit(reviewid, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        const review_one_list = response.data;
        console.log(review_one_list);
        dispatch(loadReview(review_one_list));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



// 리뷰 하나 불러오기
export const getPostOneAX = (reviewid) => {
  console.log(reviewid);
  return async (dispatch) => {
    await apis
      .add(reviewid)
      .then((response) => {
        console.log(response);
        const postOne = response.data;
        console.log(postOne);
        dispatch(getPostOne(postOne));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "review/LOAD":
      console.log("보여주기");
      // return state; //리덕스 단순동작 확인
      return { post: action.review_list };
    case "GET_POST_ONE":
      console.log("하나 가져오기");
      return { postOne: action.review_one_list };

    case "review/DELETE": {
      console.log("삭제");
      const new_reviews_list = state.post.filter((l, idx) => {
        return parseInt(action.review_id) !== idx;
      });
      return { post: new_reviews_list };
    }

    case "review/MODIFY": {
      console.log("수정하기");
      const new_review_list = state.post.map((a, idx) =>
        parseInt(action.review_id) === a.review_id
          ? { ...a, ...action.review }
          : a
      );
      const new_review = action.review;
      console.log(new_review);
      return { ...state, reviews: new_review_list, modifyreview: new_review };
    }

    //리뷰 작성
    case "review/ADD": {
      const new_list = [...state.list, action.list];
      // const new_review = action.list;
      console.log(new_list);
      return { list: new_list };
    }
    default:
      return state;
  }
}