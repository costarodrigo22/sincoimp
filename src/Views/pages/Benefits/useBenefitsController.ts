import { useState } from "react";

export default function useBenefitsController() {
  const [modalVisible, setModalVisible] = useState(false);

  return { modalVisible, setModalVisible };
}
