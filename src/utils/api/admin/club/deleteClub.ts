import axios from "axios"
import { Token, SERVER_URL } from "../../../axios/test"

export const deleteClub = async(club_id : number) => {
  try {
    const response = await axios.delete(
      `http://${SERVER_URL}/club/${club_id}`, 
      {
        headers: {
          authorization: `Bearer ${Token}`
        }
      }
    )
    return response
  } catch(error) {
    console.log("error", error)
  }
}