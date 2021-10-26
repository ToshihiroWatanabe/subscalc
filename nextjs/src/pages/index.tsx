import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import SubscriptionService from "services/Subscription.service";
import { Subscription } from "types/Subscription";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Button,
  TableCaption,
  Box,
} from "@chakra-ui/react";
import SubscriptionFormDialog from "components/SubscriptionFormDialog";

const newSubscription: Subscription = {
  _id: {
    $oid: "",
  },
  name: "",
  monthEvery: 1,
  price: 980,
};

const Home: NextPage = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>();

  useEffect(() => {
    getIndex();
  }, []);

  useEffect(() => {
    if (subscriptions === undefined) return;
    console.log(subscriptions);
  }, [subscriptions]);

  const getIndex = () => {
    SubscriptionService.index()
      .then((res) => {
        console.log(res.data);
        setSubscriptions(res.data);
      })
      .catch((reason) => {
        console.error(reason);
      });
  };

  return (
    <>
      <Table variant="simple">
        <TableCaption placement="top">サブスクリプション一覧</TableCaption>
        <Thead>
          <Tr>
            <Td>ID</Td>
            <Td>名前</Td>
            <Td>何ヶ月ごと</Td>
            <Td>料金</Td>
            <Td>操作</Td>
          </Tr>
        </Thead>
        <Tbody>
          {subscriptions?.map((subscription, index) => {
            return (
              <Fragment key={index}>
                <Tr>
                  <Td>{subscription._id.$oid}</Td>
                  <Td>{subscription.name}</Td>
                  <Td>{subscription.monthEvery}</Td>
                  <Td>{subscription.price}</Td>
                  <Td>
                    <SubscriptionFormDialog
                      subscription={subscription}
                      getIndex={getIndex}
                    />
                  </Td>
                </Tr>
              </Fragment>
            );
          })}
        </Tbody>
      </Table>
      <Box mt={3} />
      <SubscriptionFormDialog
        subscription={newSubscription}
        getIndex={getIndex}
      />
    </>
  );
};

export default Home;
