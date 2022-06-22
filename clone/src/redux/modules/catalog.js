import produce from "immer";
import { apis } from "../../shared/api";

// Actions
const LOAD = "catalog/LOAD";
// const CREATE = "catalog/CREATE";
const PAGE = "catalog/PAGE";
// const UPDATE = "catalog/UPDATE";
const DETAIL = "catalog/DETAIL";
// const DELETE = "catalog/DELETE";


// Initial State
const initialState = {
  list: [],
  post: {},
  currentPage: 0,
};


// Action Creators
export function loadCatalog(catalog_info) {
  return { type: LOAD, catalog_info };
}

export function detailPage(detail) {
  return { type: DETAIL, detail };
}

export function changePage(page) {
  return { type: PAGE, page };
}


//middlewares
export const loadCatalogAxios = (id) => {
  return async function (dispatch) {
    await apis
      .catalogDetail(id)
      .then((catalog_data) => {
          console.log(catalog_data)
        dispatch(loadCatalog(catalog_data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const loadDetailAxios = (id) => {
  return async function (dispatch) {
    console.log(id)
    await apis
        
      .productInfo(id)

      .then((catalog_data) => {
          console.log(catalog_data)
        dispatch(detailPage(catalog_data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};




// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "catalog/LOAD": {
        console.log(action.catalog_info.content[0].id)
      return {
        list: action.catalog_info,
        post: state.post,
        currentPage: state.currentPage,
      };
    }

    case "book/PAGE": {
      return {
        list: state.list,
        post: state.post,
        currentPage: action.page,
      };
    }

    case "catalog/DETAIL": {
        console.log(action.detail)
      return {
        list: state.list,
        post: action.detail,
        currentPage: state.currentPage,
      };
    }

    // do reducer stuff
    default:
      return state;
  }
}



// export function createReview(review_write) {
//   return { type: CREATE, review_write };
// }

// export function editBook(book_edit) {
//   return { type: UPDATE, book_edit };
// }



// export function deleteBook(delbook) {
//   return { type: DELETE, delbook };
// }

// export const loadPostsListAxios = (mount) => { // 전체 게시글 리스트 불러오기
// 	return async (dispatch) => {
// 		if(mount){
// 		await apis
//         .postList().then((res) => {
// 				console.log(res, 'main page posts list response')
// 				const post_list = res.data;
// 				dispatch(loadPostsList(post_list));
// 			})
// 			.catch((err) => {
// 				console.error(err, 'main page posts list error');
// 				const alert = async () => {
// 					await window.alert(err.response.data);
// 					if(err.response.status === 400){
// 						window.location.href = '/';
// 					}
// 				}
// 				alert();
// 			});
// 		}else{
// 			dispatch(resetPostsList())
// 		}
// 	};
// };



// export const postBookAxios = (frm) => {
//   return async function (dispatch) {
//     await apis.bookpost(frm).catch((err) => {
//       alert("로그인을 해주세요!");
//     });
//   };
// };

// export const likeAxios = (id) => {
//   return async function (dispatch) {
//     await apis
//       .likeit(id)
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export const deleteAxios = (id) => {
//   return async function () {
//     let success = null;
//     await apis.bookDelete(id)
//       .then((del) => {
//         success = true
//       })
//       .catch((err) => {
//       console.log(err);
//         success = false;
//     });
//     return success;
//   };
// };

// export const editBookAxios = (id, title, content, rate, url) => {
//   return async function (dispatch) {
//     console.log(content);
//     await apis
//       .editBook(id, title, content, rate, url)
//       .then((res) => {})
//       .catch((err) => {
//         alert("해당 게시물을 작성한 유저만 수정할 수 있습니다!");
//       });
//   };
// };

 // case "book/CREATE": {
    //   const new_book_list = [...state.list, action.post];
    //   return {
    //     list: new_book_list,
    //     post: state.post,
    //     currentPage: state.currentPage,
    //   };
    // }

 // case "book/UPDATE": {
    //   // const UPDATE = [...state.list, action.book_edit];
    //   return {
    //     list: action.book_edit,
    //     post: state.post,
    //     currentPage: state.currentPage,
    //   };
    // }

    // case "book/DELETE": {
    //   return {
    //     list: state.list,
    //     post: action.delbook,
    //     currentPage: state.currentPage,
    //   };
    // }








    // export const postPostList = (data) => {
    //     return async function(dispatch, getState, { history }){
    //         // console.log(localStorageGet("jwtToken"));
    //         // console.log("data",data.post_data);
    //         const formData = new FormData();
    //         formData.append("img",data.img);
    //         formData.append(
    //             "post-data",
    //             new Blob([JSON.stringify(data.post_data)], {
    //                 type:"application/json"
    //             })
    //         );
    //         for (let [key, value] of formData.entries()) {
    //             // console.log(key, value);
    //           }
    //         await axios({
    //         method: "post",
    //         url: `${BASE_URL}/cafereview`,
    //         data: formData,
    //         headers: {     
    //             "Content-Type": "multipart/form-data",
    //             'Authorization': "Bearer " + localStorageGet("jwtToken") ,
    //         },
    //         }).then((response)=> {
    //             // console.log('post_response: ',response.data);
    //             history.replace("/")
    //         })
    //     }
    // }