import { axiosInstance as api } from "../api/api";

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response;
  } catch (error) {
    if (error?.response) {
      return error.response;
    } else {
      return error;
    }
  }
};

export const register = async (email, password, fullname, dob, gender) => {
  try {
    const response = await api.post("/register", {
      email,
      password,
      fullname,
      gender,
      dob,
    });
    return response;
  } catch (error) {
    if (error?.response) {
      return error.response;
    } else {
      return error;
    }
  }
};
