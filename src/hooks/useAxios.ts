import axios from "axios";
import { useCookies } from "react-cookie";

const useAxios = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  return axios.create({
    headers: {
      Authorization: "Bearer " + cookies.token,
    },
  });
};

export default useAxios;
