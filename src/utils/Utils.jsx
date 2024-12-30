import { Redirect } from "react-router-dom";
import axios from "axios";
import config from "../config/config";
import CryptoJS from "crypto-js";
import moment from "moment";

export const axiosCall = async (method, url, data = {}, publicCall = false) => {
  const authKey = CryptoJS.AES.encrypt(
    moment().format("YYYY-MM-DD HH:mm:ss"),
    config.AUTH_KEY
  ).toString();
  const token = publicCall
    ? config.PUBLIC_ACSESS_TOKEN
    : window.localStorage.getItem("accessToken");
  const response = await axios({
    method: method,
    url: url,
    data: data,
    headers: {
      Authorization: `${config.ENCRYPTION_KEY} ${token}`,
      "api-key": authKey,
    },
    json: true,
  });
  return response;
};
