import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://192.168.29.192:8004/multiple_login";

export default async function login(username, password) {
  if (username !== "super_admin" || password !== "Admin@123") {
    console.log("You entered invalid credentials", { username, password });
    throw new Error("Invalid Credentials");
  }

  console.log("sending an API request", { username, password });

  try {
    const response = await axios.post(API_URL, { user_name: username, show_password: password }, {
      headers: {
        "Authorization": "engguergi09ertgiojg",
      }
    });

    console.log("API response", response.data);

    if (response.data.access_token) {
      Cookies.set("Tokensss", response.data.access_token, { expires: 1 });
      return { access_token: response.data.access_token };
    } else {
      throw new Error("Token not found in response");
    }
  } catch (error) {
    console.log("Token response is not successful");
    throw error;
  }
}
