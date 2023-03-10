import { BACKEND } from "../constants/Backend";

import axios from "axios";

export class RestourantService {
  static getAllRestournat = async () => {
    try {
      const response = await axios.get(`${BACKEND}/restaurant`);

      return response;
    } catch (e) {
      console.error(e);
    }
  };
  static getRestourantWithId = async (id) => {
    try {
      const response = await axios.get(`${BACKEND}/restaurant/${id}`);

      return response;
    } catch (e) {
      console.error(e);
    }
  };

  static getTodayMeni = async (id) => {
    try {
      const response = await axios.get(`${BACKEND}/restaurant/${id}/menu`);
      console.log(response, "RESPONSE");
      return response;
    } catch (e) {
      console.error(e);
    }
  };
  static getWeekMeni = async (id) => {
    try {
      const response = await axios.get(`${BACKEND}/restaurant/${id}/menu/week`);
      console.log(response, "RESPONSE");
      return response;
    } catch (e) {
      console.error(e);
    }
  };
}

// export const getAllRestournat = async () =>
//   await axios
//     .get(`${BACKEND}/restaurant`)
//     .then((response) => response?.data)
//     .catch((error) => {
//       console.log(error.response);
//     });
