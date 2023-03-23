import { BACKEND } from "../constants/Backend";

import axios from "axios";

export class Orderservice {
  static postOrder = async (data, token) => {
    try {
      const response = await axios.post(`${BACKEND}/order`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return response;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  static getUserOrder = async (token, current) => {
    try {
      const response = await axios.get(
        `${BACKEND}/order/mine?current=${current}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response;
    } catch (e) {
      console.error(e);
    }
  };
  static deleteOrder = async (token, id) => {
    try {
      const response = await axios.delete(`${BACKEND}/order/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return response;
    } catch (e) {
      console.error(e);
    }
  };
}
