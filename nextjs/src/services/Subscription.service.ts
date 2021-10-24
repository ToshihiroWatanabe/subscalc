import http from "http-common";

/**
 * サブスクリプションに関するAPIのリクエストを送信します。
 */
class SubscriptionService {
  index() {
    return http.get("/subscriptions");
  }
}

export default new SubscriptionService();
