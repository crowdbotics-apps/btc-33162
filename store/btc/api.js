import axios from "axios"
import { BTC_USERNAME, BTC_PASSWORD } from "react-native-dotenv"
const btc = axios.create({
  baseURL: "https://v3.aggr.trade/dz3g",
  auth: { username: BTC_USERNAME, password: BTC_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
