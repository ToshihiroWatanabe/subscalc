import http from "http-common";
import { Subscription } from "types/Subscription";

/**
 * サブスクリプションに関するAPIのリクエストを送信します。
 */
class SubscriptionService {
  index() {
    return http.get<Subscription[]>("/subscriptions");
  }
  create(subscription: Subscription) {
    return http.post("/subscriptions", subscription);
  }
  update(subscription: Subscription) {
    return http.put("/subscriptions/" + subscription._id.$oid, subscription);
  }
}

export default new SubscriptionService();
