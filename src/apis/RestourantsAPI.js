import { BACKEND } from "../constants/Backend";

import axios from "axios";

export class RestourantService {
  static getAllRestournat = async (token) => {
    console.log(token, "token RESTOURAN SERVICE");
    try {
      const response = await axios.get(`${BACKEND}/restaurant`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

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
      return response;
    } catch (e) {
      console.error(e);
    }
  };
}
