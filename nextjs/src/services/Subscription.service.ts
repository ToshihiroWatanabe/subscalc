import http from "http-common";
import { Subscription } from "types/Subscription";

/**
 * サブスクリプションに関するAPIのリクエストを送信します。
 */
class SubscriptionService {
  index() {
    return http.get<Subscription[]>("/subscriptions");
  }
}

export default new SubscriptionService();
