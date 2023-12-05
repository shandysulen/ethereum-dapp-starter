import { useState } from "react";

export const useDisclosure = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return { isOpen, setIsOpen, onOpen, onClose };
};
