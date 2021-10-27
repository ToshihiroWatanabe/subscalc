import axios from "axios";

export default axios.create({
  // リクエスト送信先のURL
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.RAILS_API_URL
      : "http://localhost:3000",
  // ヘッダーでタイプをJSONに指定
  headers: {
    "Content-type": "application/json",
  },
});
