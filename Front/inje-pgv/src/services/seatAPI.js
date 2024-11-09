import axios from "axios";
export const seatAPI = () => {
  const path = "https://port-0-test-hkty2alqiwtpix.sel4.cloudtype.app";
  const getMovieInfo = async (data) => {
    try {
      const res = await axios.get(`${path}/api/movie_info`, {
        params: { date_info: data }, // data 객체를 쿼리 파라미터로 전송
      });
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
    return res;
  };
  const getAllCinemaData = async () => {
    try {
      const res = await axios.get(`${path}/api/screening_seat`);
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
    return res;
  };
  const postBookingMovieData = async (data) => {
    console.log(data);

    try {
      const res = await axios.post(`${path}/api/update`, data);
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
    return res;
  };

  const bookingSeatInfo = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`${path}/api/booking`, data);
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
    return res;
  };

  return {
    getMovieInfo,
    getAllCinemaData,
    postBookingMovieData,
    bookingSeatInfo,
  };
};
