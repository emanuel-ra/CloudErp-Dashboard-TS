import axios, { AxiosResponse } from "axios";
import { API_URL, ENDPOINT_LOGIN } from "../setup/constants";
import { ISessionResponse } from "../abstraction/Interfazes/IAuth";

export async function LogInService({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<ISessionResponse> {
  try {
    const response: AxiosResponse<ISessionResponse> = await axios.post(
      `${API_URL}${ENDPOINT_LOGIN}`,
      {
        userName: username,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // Access the data from the response
    const result: ISessionResponse = response.data;

    if (result.isSuccess) {
      response.data.token.trim();
    }
    return result;
  } catch (error) {
    // Handle errors here
    //console.error("Error fetching user data:", error);
    throw error; // Rethrow the error or handle it as needed
  }
}
