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
import { EditIcon } from "@chakra-ui/icons";

function EditDialog(props: { subscription: Subscription }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState(props.subscription.name);
  const [monthEvery, setMonthEvery] = useState(props.subscription.monthEvery);
  const [price, setPrice] = useState(props.subscription.price);

  const initialRef = useRef<any>();
  const finalRef = useRef<any>();

  const onUpdateButtonClick = () => {};

  return (
    <>
      <Button onClick={onOpen} ref={finalRef}>
        <EditIcon mr={1} />
        編集
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>編集</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input ref={initialRef} placeholder="名前" value={name} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>何ヶ月ごと</FormLabel>
              <Input placeholder="何ヶ月ごと" value={monthEvery} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>料金</FormLabel>
              <Input placeholder="料金" value={price} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              キャンセル
            </Button>
            <Button colorScheme="blue" onClick={onUpdateButtonClick}>
              更新
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditDialog;
