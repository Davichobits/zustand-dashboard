import { create } from 'zustand';

interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  increaseBlackBears: (by: number)=> void;
}

export const useBearStore = create<BearsState>((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,
  increaseBlackBears: ()=>set((state)=>({blackBears: state.blackBears + 1})),
}));