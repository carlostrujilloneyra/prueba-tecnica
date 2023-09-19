import { useState } from "react";
import { StateContext } from "./StateContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const StateProvider = ({ children }: Props) => {
  const [likes, setLikes] = useState<number>(1);

  return (
    <StateContext.Provider
      value={{
        likes,
        setLikes,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
