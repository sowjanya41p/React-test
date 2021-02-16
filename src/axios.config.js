import axios from "axios";

const instace = axios.create({
  baseUrl: "https://developers.zomato.com/api/v2.1",
});
instace.defaults.headers.common["Content-Type"] =
  "application/json; charset=UTF-8";
instace.defaults.headers.common["Accept"] = "application/json";
instace.defaults.headers.common["user-key"] = "355916ecde6f1572426e7124ebbfc5f8"

export default instace;
