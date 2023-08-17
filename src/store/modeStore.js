import { create } from "zustand";

export const useModeStore = create((set) => ({
  mode: "light",
  setMode: (checked) => set({ mode: checked ? 'dark' : 'light' }),
}));
