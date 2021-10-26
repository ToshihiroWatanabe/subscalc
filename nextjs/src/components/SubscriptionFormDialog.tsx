import React, { useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Subscription } from "types/Subscription";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import SubscriptionService from "services/Subscription.service";

function SubscriptionFormDialog(props: {
  subscription: Subscription;
  getIndex: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isModeCreate = props.subscription._id.$oid === "";
  const [name, setName] = useState(props.subscription.name);
  const [monthEvery, setMonthEvery] = useState(props.subscription.monthEvery);
  const [price, setPrice] = useState(props.subscription.price);

  const initialRef = useRef<any>();
  const finalRef = useRef<any>();

  let isControlPressed = false;

  const onProceedButtonClick = () => {
    if (!validate()) return;
    const subscription: Subscription = {
      _id: { $oid: props.subscription._id.$oid },
      name: name,
      monthEvery: monthEvery,
      price: price,
    };
    if (props.subscription._id.$oid === "") {
      SubscriptionService.create(subscription)
        .then((res) => {
          if (res.status === 201) {
            props.getIndex();
            onClose();
          }
        })
        .catch((reason) => {
          console.error(reason);
        });
    } else {
      SubscriptionService.update(subscription)
        .then((res) => {
          if (res.status === 200) {
            props.getIndex();
            onClose();
          }
        })
        .catch((reason) => {
          console.error(reason);
        });
    }
  };

  const validate = () => {
    return name && monthEvery && price;
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Control") {
      isControlPressed = true;
    }
    if (event.key === "Enter" && isControlPressed) {
      isControlPressed = false;
      onProceedButtonClick();
    }
  };

  return (
    <>
      <Button onClick={onOpen} ref={finalRef}>
        {isModeCreate && (
          <>
            <AddIcon mr={1} />
            新しいサブスクリプションを追加
          </>
        )}
        {!isModeCreate && (
          <>
            <EditIcon mr={1} />
            編集
          </>
        )}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent onKeyDown={onKeyDown}>
          <ModalHeader>
            {isModeCreate
              ? "新しいサブスクリプションを追加"
              : "サブスクリプションを編集"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                ref={initialRef}
                placeholder="名前"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>何ヶ月ごと</FormLabel>
              <Input
                type="number"
                placeholder="何ヶ月ごと"
                value={monthEvery}
                onChange={(e) => {
                  if (e.target.value.match(/[0-9]*/)) {
                    setMonthEvery(parseInt(e.target.value));
                  }
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>料金</FormLabel>
              <Input
                type="number"
                placeholder="料金"
                value={price}
                onChange={(e) => {
                  if (e.target.value.match(/[0-9]*/)) {
                    setPrice(parseInt(e.target.value));
                  }
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              キャンセル
            </Button>
            <Button colorScheme="blue" onClick={onProceedButtonClick}>
              {isModeCreate ? "作成" : "更新"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SubscriptionFormDialog;
