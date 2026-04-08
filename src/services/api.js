import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/quantities",
});

// GET history
export const getHistory = () => {
  return api.get("/history").then(res => res.data);
};

// POST operation
export const operate = (operation, payload) => {
  return api.post(`/${operation}`, payload).then(res => res.data);
};