import axios from "axios";
import type { IRegisterUserDTO } from "./dto";
import type { IRegisterResult } from "./interfaces";

const API_HOST_URL = process.env["REACT_APP_API_HOST"];

export const registerUser = async (
  newUser: IRegisterUserDTO
): Promise<IRegisterResult> => {
  console.log(process.env);
  const url = `${API_HOST_URL}/auth/register`;
  try {
    const res = await axios.post(url, newUser);
    return {
      success: true,
      message: res.data,
    };
  } catch (err) {
    return {
      success: false,
      message: "Register failed. Please try again!",
    };
  }
};
