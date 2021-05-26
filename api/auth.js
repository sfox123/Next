import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-express-439e0.cloudfunctions.net/app",
});
