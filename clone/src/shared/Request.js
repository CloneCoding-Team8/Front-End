import axios from "axios";

const api = axios.create({
  baseURL: "http://13.124.166.209",
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
});

// const api = axios.create({
//   baseURL: "http://13.124.166.209",
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//     accept: "application/json,",
//   },
// });

export const apis = {
  // review
  load: (productid) => api.get(`/api/review/list/${productid}`),
  add: (reviewid) => api.get(`/api/review/detail/${reviewid}`),
  edit: (reviewid, formData) => api.patch(`/api/review/${reviewid}`, formData),
  del: (reviewid) => api.delete(`/api/review/${reviewid}`),
  adds: (productid, formData) => api.post(`/api/review/${productid}`, formData),
  // search: (value) => api.get(`/api/articles/search?query=${value}`),
};
