import axios from "axios"
import { Token, SERVER_URL } from "../../../axios/test"

export const getAllPerson = async() => {
  try {
    const response = await axios.get(
      `http://${SERVER_URL}/person/`,
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