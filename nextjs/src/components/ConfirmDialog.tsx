import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useRef } from "react";
import SubscriptionService from "services/Subscription.service";
import { Subscription } from "types/Subscription";

function ConfirmDialog(props: {
  subscription: Subscription;
  getIndex: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef<any>();

  const onDeleteButtonClick = () => {
    SubscriptionService.delete(props.subscription._id.$oid)
      .then((res) => {
        if (res.status === 204) {
          props.getIndex();
          onClose();
        }
      })
      .catch((reason) => {
        console.error(reason);
      });
  };
  return (
    <>
      <Button onClick={onOpen}>
        <DeleteIcon />
        削除
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>サブスクリプションの削除</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.subscription.name}を削除しますか？</ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose} ref={initialRef}>
              キャンセル
            </Button>
            <Button colorScheme="red" onClick={onDeleteButtonClick}>
              削除
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmDialog;
