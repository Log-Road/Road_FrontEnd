import axios from "axios"
import { Token, SERVER_URL } from "../../../axios/test"

export const searchPerson = async() => {
  try {
    const response = await axios.get(
      `http://${SERVER_URL}/person/search`,
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