import { useContext } from "react";
import { StateContext } from "../../../../context/StateContext";

export const QuantityLikes = () => {
  const { likes } = useContext(StateContext);

  return (
    <>
      <span className="container-quantity-likes">{likes}</span>
    </>
  );
};
