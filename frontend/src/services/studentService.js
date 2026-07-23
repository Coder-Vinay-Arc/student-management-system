import axios from "axios";

const API = "https://student-management-system-81pk.onrender.com/students";

export const getStudents = () => axios.get(API);

export const getStudentById = (id) => axios.get(`${API}/${id}`);

export const addStudent = (student) => axios.post(API, student);

export const updateStudent = (id, student) =>
  axios.put(`${API}/${id}`, student);

export const deleteStudent = (id) =>
  axios.delete(`${API}/${id}`);