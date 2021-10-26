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
} from "@chakra-ui/react";
import EditDialog from "components/EditDialog";

const Home: NextPage = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>();

  useEffect(() => {
    SubscriptionService.index()
      .then((res) => {
        console.log(res.data);
        setSubscriptions(res.data);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }, []);

  useEffect(() => {
    if (subscriptions === undefined) return;
    console.log(subscriptions);
  }, [subscriptions]);

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
                    <EditDialog subscription={subscription} />
                  </Td>
                </Tr>
              </Fragment>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default Home;
