import { createContext } from "react";

export interface StateContextProp {
  likes: number;
  setLikes: React.Dispatch<React.SetStateAction<number>>;
}

export const StateContext = createContext({} as StateContextProp);
