import axios from "axios";

// axios create (axios 골격)
// const imgApi = axios.create({
//   baseURL: "http://15.164.218.19",
//   headers: {
//     "content-type": "multipart/form-data",
//   },
// });

const api = axios.create({
  baseURL: "http://13.124.166.209",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// localStorage.setItem("token", token)

// interceptors (유저의 로그인 정보)
// Bearer가 백엔드의 토큰을 검사함
// 새로고침을 해도 겟아이템 함수를 사용해서 토큰값을 유지할 수 있도록 인터셉터가 존재

api.interceptors.request.use(function (config) {
  const accessToken = `${localStorage.getItem("token")}`;
  console.log(accessToken)
  if (accessToken !== undefined) {
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});




// imgApi.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   if (accessToken !== undefined) {
//     config.headers.common["Authorization"] = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// api body
export const apis = {
  // article (에이젝스 요청)
  catalogList: (pageViewNum) => api.get(`/api/product/list?page=${pageViewNum}&size=3`),

//   bookpost: (frm) => imgApi.post("/api/bookreviews", frm),

//   likeit: (id) => api.post(`/api/bookreviews/${id}/like`),

  bookDetail: (id) => api.get(`/api/bookreviews/${id}`),

  productInfo: (id, img, title, price, delivecost, star) =>
  api.get(`/api/product/list/${id}` , {
    id: id,
    productimg: img,
    title: title,
    price: price,
    deliver: delivecost,
    star: star
  }),

//   editBook: (id, title, content, rate, url) =>
//     api.patch(`/api/bookreviews/${id}`, {
//       bookBuyUrl: url,
//       rank: rate,
//       title: title,
//       content: content,
//     }),

  bookDelete: (id) => api.delete(`/api/bookreviews/${id}`),



  // user
  login: (id, pw) =>
    api.post("/user/login", { 
        username: id, 
        password: pw 
    }),
  logout: () => api.post("/logout", {}),
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
  usercheck: () => api.get("/api/authentication"),

};
