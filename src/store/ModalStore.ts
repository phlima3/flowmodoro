import { create } from "zustand";

type ModalState = {
  ModalCreateTask: boolean;
  ModalGeneric: boolean;

  openModal: (modalName: keyof ModalState) => void;
  closeModal: (modalName: keyof ModalState) => void;
};

const useModalStore = create<ModalState>((set) => ({
  ModalCreateTask: false,
  ModalGeneric: false,
  openModal: (modalName: keyof ModalState) =>
    set((state) => ({ ...state, [modalName]: true })),
  closeModal: (modalName: keyof ModalState) =>
    set((state) => ({ ...state, [modalName]: false })),
}));

export default useModalStore;
