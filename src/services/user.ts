import axios from "axios";
import { baseUrl } from "../constants";
import { User } from "../types";

export const sendUserData = async (userData: User) => {
    const response = await axios.post(`${baseUrl}/feedback`, userData)
    return response;
}