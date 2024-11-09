import axios from "axios";
export const loginAPI = () => {
  const path = "https://port-0-test-hkty2alqiwtpix.sel4.cloudtype.app";

  const signinUser = async (id, pw) => {
    const postData = {
      id: id,
      password: pw,
    };
    try {
      const res = await axios.post(`${path}/api/login`, postData);

      return res;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const resisterUserData = async (data) => {
    try {
      const res = await axios.post(`${path}/api/register`, data);
      return res.status === 200 ? true : false;
    } catch (error) {
      console.error("Error:", error);
    }
    return res;
  };
  return {
    signinUser,
    resisterUserData,
  };
};
