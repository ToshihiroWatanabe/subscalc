import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import SubscriptionService from "services/Subscription.service";
import { Subscription } from "types/Subscription";

const Home: NextPage = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>();

  useEffect(() => {
    SubscriptionService.index().then((res) => {
      console.log(res.data);
      setSubscriptions(res.data);
    });
  }, []);

  useEffect(() => {
    if (subscriptions === undefined) return;
    console.log(subscriptions);
  }, [subscriptions]);

  return (
    <>
      <h2>サブスクリプション一覧</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>名前</td>
            <td>何ヶ月ごと</td>
            <td>料金</td>
          </tr>
        </thead>
        <tbody>
          {subscriptions?.map((subscription, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td>{subscription._id.$oid}</td>
                  <td>{subscription.name}</td>
                  <td>{subscription.monthEvery}</td>
                  <td>{subscription.price}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
