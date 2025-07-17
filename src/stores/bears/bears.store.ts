import { create } from 'zustand';

interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  increaseBlackBears: (by: number)=> void;
  increasePolarBears: (by: number)=> void;
  increasePandaBears: (by: number)=> void;
}

export const useBearStore = create<BearsState>((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,
  increaseBlackBears: (by:number)=>set((state)=>({blackBears: state.blackBears + by})),
  increasePolarBears: ()=>set((state)=>({blackBears: state.polarBears + 1})),
  increasePandaBears: ()=>set((state)=>({blackBears: state.pandaBears + 1})),
}));