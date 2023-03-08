import { BACKEND } from "../constants/Backend";

import axios from "axios";

export class RestourantService {
  static getAllRestournat = async () => {
    try {
      const data = await axios.get(`${BACKEND}/restaurant`);

      return data;
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
