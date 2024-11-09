import { useState } from "react";

export const useBottomSheet = () => {
  const [open, setOpen] = useState(false);
  return {
    open,
    setOpen,
  };
};
