export const seatAPI = () => {
  const getMovieInfo = async (data) => {
    try {
      const res = await axios.post(`${path}/api/register`, data);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
    return res;
  };

  const getScreenSeat = async (data) => {
    try {
      const res = await axios.post(`${path}/api/register`, data);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
    return res;
  };

  const postSeatDataToServer = async () => {
    try {
      const res = await axios.post(`${path}/api/register`, data);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
    return res;
  };
  return {
    getMovieInfo,
    getScreenSeat,
    postSeatDataToServer,
  };
};
