import create from "zustand";

interface LoginState {
  data: {
    name: string;
  };
  setName: (data: { name: string }) => void;
}

const useStore = create<LoginState>((set) => ({
  data: {
    name: "",
  },
  setName: (data) =>
    set((state) => ({
      ...state,
      data,
    })),
}));

export default useStore;
