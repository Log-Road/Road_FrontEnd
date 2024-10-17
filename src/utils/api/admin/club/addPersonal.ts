import axios from "axios"
import { Token, SERVER_URL } from "../../../axios/test"

export const addPersonal = async(club_name : string) => {
  try {
    const response = await axios.post(
      `http://${SERVER_URL}/club`,
      club_name,
      {
        headers: {
          authorization: `Bearer ${Token}`
        }
      }
    )
    return response
  } catch (error) {
    console.log("error", error)
  }
}