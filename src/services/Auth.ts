import axios from "axios";
import { API_URL, ENDPOINT_LOGIN } from "../setup/constants";

export async function accountLogin({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const { data } = await axios.post(
      `${API_URL}${ENDPOINT_LOGIN}`,
      {
        userName: username,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return {
      status: data.isSuccess,
      errors: data.errors,
      auth: {
        token: data.token,
        data: data.user,
      },
      ProtectedRoutes: data.routes,
    };
  } catch {}
}
