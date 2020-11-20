import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://127.0.0.1:5001/e-commerce-7a00e/us-central1/api'
    // "http://127.0.0.1:5001/e-commerce-7a00e/us-central1/api",
});

export default instance;

