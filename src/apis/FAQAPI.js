import { BACKEND } from "../constants/Backend";

import axios from "axios";

export class FAQService {
  static getAllFAQ = async () => {
    try {
      const response = await axios.get(`${BACKEND}/faq`);

      return response;
    } catch (e) {
      console.error(e);
    }
  };
}
