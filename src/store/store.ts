import { create } from "zustand";

interface StateProps {
    currentStep: number;
    setCurrentStep: (step: number) => void;
}

const useStore = create<StateProps>((set) => ({
    currentStep: 1,
    setCurrentStep: (step: number) => set({ currentStep: step }),
}));

export default useStore;
