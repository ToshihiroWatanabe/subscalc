export type Subscription = {
  name: string;
  monthEvery: number;
  price: number;
  _id: {
    $oid: string;
  };
};
