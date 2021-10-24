import type { NextPage } from "next";
import { useEffect } from "react";
import SubscriptionService from "services/Subscription.service";

const Home: NextPage = () => {
  useEffect(() => {
    SubscriptionService.index().then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default Home;
