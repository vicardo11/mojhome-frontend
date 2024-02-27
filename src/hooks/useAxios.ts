import axios from "axios";
import { useAuth } from "react-oidc-context";

const useAxios = () => {
  const auth = useAuth();
  return axios.create({
    headers: {
      Authorization: "Bearer " + auth.user?.access_token,
    },
  });
};

export default useAxios;
