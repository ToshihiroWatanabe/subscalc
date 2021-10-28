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
  Grid,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
} from "@chakra-ui/react";
import SubscriptionFormDialog from "components/SubscriptionFormDialog";
import ConfirmDialog from "components/ConfirmDialog";
import CommonMeta from "components/CommonMeta";

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
  const [monthCount, setMonthCount] = useState(1);
  const [sumPerMonth, setSumPerMonth] = useState(0);

  useEffect(() => {
    getIndex();
  }, []);

  useEffect(() => {
    if (subscriptions === undefined) return;
    console.log(subscriptions);
    let sum = 0;
    subscriptions.forEach((subscription) => {
      sum += subscription.price / subscription.monthEvery;
    });
    setSumPerMonth(Math.round(sum));
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
      <CommonMeta />
      <Text fontSize="4xl">サブスク計算アプリ</Text>
      <Flex alignItems="center">
        <NumberInput
          step={1}
          defaultValue={1}
          min={1}
          max={36}
          maxW={24}
          value={monthCount}
          onChange={(valueAsString, valueAsNumber) => {
            setMonthCount(valueAsNumber);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        ヶ月で
        {sumPerMonth * monthCount}円
      </Flex>
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
                    <Grid templateColumns="repeat(5, 1fr)" gap={3}>
                      <SubscriptionFormDialog
                        subscription={subscription}
                        getIndex={getIndex}
                      />
                      <ConfirmDialog
                        subscription={subscription}
                        getIndex={getIndex}
                      />
                    </Grid>
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
