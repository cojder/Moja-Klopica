import axios from "axios";

import { BACKEND } from "../constants/Backend";

export class UserService {
  static registerClient = async (data) => {
    try {
      const response = await axios.post(`${BACKEND}/client`, data);
      return response;
    } catch (e) {
      console.error("Error:", e);
    }
  };

  static loginUser = async (data) => {
    try {
      const response = await axios.post(`${BACKEND}/auth/login`, data);
      localStorage.setItem("token", response.data.access_token);
      return response;
    } catch (e) {
      console.error("Error:", e);
      throw e;
    }
  };

  static forgetPassword = async (data) => {
    try {
      const response = await axios.get(
        `${BACKEND}/auth/password/forgot?email=${data}`
      );
      return response;
    } catch (e) {
      console.error("Error:", e);
    }
  };

  static getAllClients = async () => {
    try {
      const response = await axios.get(`${BACKEND}/client`);
      return response;
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  static getLogedUser = async (token) => {
    try {
      const response = await axios.get(`${BACKEND}/auth/profile`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.data;
      return data;
    } catch (e) {
      console.error("Error:", e);
      throw e;
    }
  };

  static updateClient = async (data, token) => {
    try {
      const response = await axios.patch(`${BACKEND}/client`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response;
    } catch (e) {
      console.error("Error:", e);
    }
  };

  static updatePassword = async (data, token) => {
    try {
      const response = await axios.patch(`${BACKEND}/client/password`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
}
