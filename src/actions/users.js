import { axiosInstance as api } from "../api/api";

export const submitGame = async (userId, form) => {
  try {
    const response = await api.post("/game", {
      userId: userId,
      type: form.type,
      region: form.region,
      date: form.date,
      numberOfPlayers: form.numberOfPlayers,
      comments: form.comments,
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
