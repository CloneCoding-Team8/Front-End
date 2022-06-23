import axios from "axios";
// import {tmb} from "./Cookie"

// axios create (axios 골격)
const api = axios.create({
  baseURL: "http://13.124.166.209",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

const token = localStorage.getItem("accesstoken");
// const reftokken = document.cookie

api.interceptors.request.use(function (config) 
    {config.headers.common["Authorization"] = `Bearer ${token}`;
        return config;
    })

// api body
export const apis = {
  // article (에이젝스 요청)
  catalogList: (pageViewNum) => api.get(`/api/product/list?page=${pageViewNum}&size=3`),
//   bookpost: (frm) => imgApi.post("/api/bookreviews", frm),
//   likeit: (id) => api.post(`/api/bookreviews/${id}/like`),
  catalogDetail: (id) => api.get("/api/product/list"),
  productInfo: (productid) => api.get(`/api/product/list/${productid}`),

 //장바구니   
 basket: () => api.get("/api/product/itemcheck"),
 addbasket: (title, itemcount) => api.post("/api/product/item",
 {
     title: title,
     itemcount: itemcount
 }),

  

 // review api
 load: (productid) => api.get(`/api/review/list/${productid}`),
 add: (reviewid) => api.get(`/api/review/detail/${reviewid}`),
 edit: (reviewid, formData) => api.patch(`/api/review/${reviewid}`, formData),
 del: (reviewid) => api.delete(`/api/review/${reviewid}`),
 adds: (productid, formData) => api.post(`/api/review/${productid}`, formData),

  // user
  login: (id, pw) =>
    api.post("/user/login", { 
        username: id, 
        password: pw 
    }),

  logout: (refreshtoken) =>  api.post("/user/logout", { 
    refreshtoken : refreshtoken
  }),
  retoken: (refreshtoken) =>  api.post("/user/newaccesstoken", { 
    refreshtoken : refreshtoken
  }),

  signup: (id, nick, pw, pwcheck) =>
    api.post("/user/signup", {
      username: id,
      nickname: nick,
      password: pw,
      confirmPassword: pwcheck,
    }),
  idcheck: (id) => api.post("/user/signup/idcheck", {
      username: id,
  }),  
//   usercheck: () => api.get("/api/authentication"),

};


// // 로컬 스토리지 저장 
// export const localStorageSet = (name, value) => { 
//     if(typeof(Storage) !== "undefined")
//     { window.localStorage.setItem(name, JSON.stringify(value)) } };

// export const localStorageRemove = (accesstoken) => { 
//     return window.localStorage.removeItem(accesstoken) };


// localStorage.setItem("token", token)

// interceptors (유저의 로그인 정보)
// Bearer가 백엔드의 토큰을 검사함
// 새로고침을 해도 겟아이템 함수를 사용해서 토큰값을 유지할 수 있도록 인터셉터가 존재

// api.interceptors.request.use(function (config) {
//   const accessToken = `${localStorage.setItem("token", config)}`;
// //   const refreshToken = document.cookie.split("=")[1]
//   console.log(accessToken)

//   if (accessToken !== undefined) {
//     config.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   } 
// //   else if (refreshToken !== undefined){
// //     config.headers.common["Authorization"] = `Bearer ${accessToken}`
// //   }
//   return config;
// });



// 로컬 스토리지 해당 key 조회 
// export const localStorageGet = (name) => { 
//     return JSON.parse(window.localStorage.getItem(name)) }; 

// 로컬 스토리지 해당 key 삭제 


// const imgApi = axios.create({
//   baseURL: "http://15.164.218.19",
//   headers: {
//     "content-type": "multipart/form-data",
//   },
// });

// imgApi.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   if (accessToken !== undefined) {
//     config.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   }
//   return config;
// });

//   editBook: (id, title, content, rate, url) =>
//     api.patch(`/api/bookreviews/${id}`, {
//       bookBuyUrl: url,
//       rank: rate,
//       title: title,
//       content: content,
//     }),


// 변수명: 토큰