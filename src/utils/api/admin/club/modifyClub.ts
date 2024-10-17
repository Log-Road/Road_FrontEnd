import axios from "axios"
import { Token, SERVER_URL } from "../../../axios/test"

export const modifyClub = async(club_id : number) => {
  try {
    const response = await axios.patch(
      `http://${SERVER_URL}/club/modify/${club_id}`,
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