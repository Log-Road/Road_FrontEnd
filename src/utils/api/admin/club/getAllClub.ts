import axios from "axios"
import { Token, SERVER_URL } from "../../../axios/test"

export const getAllClub = async() => {
  try {
    const response = await axios.get(
      `http://${SERVER_URL}/club`,
      {
        headers: {
          authorization: `Bearer ${Token}`
        }
      }
    )
  } catch (error) {
    console.log("error", error)
  }
}