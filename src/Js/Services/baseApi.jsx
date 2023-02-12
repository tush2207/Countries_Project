import axios from "axios";
import { mainURL } from "../../Utils/Constants/api_constants";

export default axios.create({
  baseURL: mainURL,
});
