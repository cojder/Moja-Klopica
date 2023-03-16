import { BACKEND } from "../constants/Backend";

import axios from "axios";

export class Orderservice {
  static postOrder = async (data) => {
    try {
      const response = await axios.post(`${BACKEND}/order`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      return response;
    } catch (e) {
      console.error(e);
    }
  };
}
